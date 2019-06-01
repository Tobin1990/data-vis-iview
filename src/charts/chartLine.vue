<template>
    <div :class="[loadingClasses, classes]">
        <Spin
            v-if="loading"
            :class="spinClasses"
            size="large"
        />
        <div :class="boxClasses">
            <h3 :class="headerClasses">
                <Select
                    v-if="groupsOptions.length > 0"
                    :value="selectedGroups"
                    size="small"
                    multiple
                    @on-change="handleselectedGroupsChange"
                >
                    <Option
                        v-for="item in groupsOptions"
                        :key="item"
                        :value="item"
                    >
                        {{ item }}
                    </Option>
                </Select>
            </h3>
            <div
                ref="dom"
                :class="classes"
            />
        </div>
    </div>
</template>

<script>
import echarts from 'echarts';
import tdTheme from './theme.json';
import { on, off } from '../utils/utils';
import dataGetter from '../mixins/dataGetter';
import {classPrifix} from '../utils/const';
echarts.registerTheme('tdTheme', tdTheme);

export default {
    name: 'ChartBar',
    mixins: [dataGetter],
    props: {
        chart: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data () {
        return {
            loading: false,
            dom: null,
            chartData: [],
            chartColumns: [],
            selectedGroups: []
        };
    },
    computed: {
        classes() {
            return [
                `${classPrifix}-chart`,
                `${classPrifix}-chart-line`
            ];
        },
        boxClasses() {
            return `${classPrifix}-chart-line-box`;
        },
        headerClasses() {
            return `${classPrifix}-chart-line-select-box`;
        },
        data() {
            const origin = this.chart.api ? this.chartData : this.chart.data;
            const maxLength = Math.max(...origin.map(item => item.data.length));
            return origin.map(item => {
                let length = item.data.length;
                let gap = maxLength - length;
                item.data = item.data.concat([...new Array(gap)].map(() => ''));
                return item;
            });
        },
        columns() {
            let chartColumns = this.chartColumns || [];
            let columns = this.chart.columns || [];
            const origin = chartColumns.length > 0 ? chartColumns : columns;
            const maxLength = Math.max(...origin.map(item => item.length));
            return origin.map(item => {
                let length = item.length;
                let gap = maxLength - length;
                item = item.concat([...new Array(gap)].map(() => '-'));
                return item;
            });
        },
        displayData() {
            if (this.groupsOptions.length > 0) {
                return this.data.filter(item => this.selectedGroups.includes(item.groupName));
            }
            else {
                return this.data;
            }
        },
        groupsOptions() {
            return Array.from(new Set(this.data.filter(item => item.groupName).map(item => item.groupName)));
        }
    },
    mounted () {
        this.selectedGroups = this.groupsOptions[0] || [];
        this.render();
        this.$watch('chart', () => {
            this.render();
            this.selectedGroups = this.groupsOptions[0] || [];
        });
    },
    beforeDestroy () {
        off(window, 'resize', this.resize);
    },
    methods: {
        handleselectedGroupsChange(value) {
            this.selectedGroups = value;
            this.render();
        },
        resize () {
            this.dom && this.dom.resize();
        },
        getDataFinished() {
            this.selectedGroups = this.groupsOptions[0] || [];
            this.render();
        },
        render() {
            const data = this.displayData;
            const columns = this.columns;
            this.dom && this.dom.clear();
            this.dom = this.$refs.dom && echarts.init(this.$refs.dom, 'tdTheme');
            if (columns.length === 0 || data.length === 0) {
                return;
            }
            let option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    left: '25%',
                    type: 'scroll',
                    width: '60%',
                    data: data.map(item => item.name)
                },
                // grid: {
                //     left: '3%',
                //     right: '4%',
                //     bottom: '10%',
                //     containLabel: true
                // },
                toolbox: {
                    top: '-1%',
                    right: '4%',
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: columns.map(item => {
                    return {
                        type: 'category',
                        boundaryGap: false,
                        data: item
                    };
                }),
                yAxis: {
                    type: 'value',
                    min: function(value) {
                        return parseInt(value.min - value.min * 0.01);
                    }
                },
                series: data.map(item => {
                    item.type = 'line';
                    return item;
                })
            };
            this.dom && this.dom.setOption(option);
            on(window, 'resize', this.resize);
        }
    }
};
</script>