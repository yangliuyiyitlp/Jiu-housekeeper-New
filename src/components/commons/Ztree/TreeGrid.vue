<!--有了进行数据转换的方法之后，开始正式些数据TreeGrid.vue组件：-->
<template>
  <el-table
    :data="data"
    border
    style="width: 100%"
    :row-style="showTr">
    <el-table-column v-for="(column, index) in columns" :key="column.dataIndex"
                     :label="column.text">
      <template slot-scope="scope">
        <span v-if="spaceIconShow(index)" v-for="(space, levelIndex) in scope.row._level" class="ms-tree-space"></span>
        <a class="button is-outlined is-primary is-small" v-if="toggleIconShow(index,scope.row)"
           @click="toggle(scope.$index)">
          <i v-if="!scope.row._expanded" class="el-icon-caret-right" aria-hidden="true"></i>
          <i v-if="scope.row._expanded" class="el-icon-caret-bottom" aria-hidden="true"></i>
        </a>
        <span v-else-if="index===0" class="ms-tree-space"></span>
        {{scope.row[column.dataIndex]}}
      </template>
    </el-table-column>
<!--系统设置 下面的区域管理开始-->
    <el-table-column label="运维电子围栏" v-if="areaOpsFencing" >
      <template slot-scope="scope">
        <a class="area" @click="handleAreaOps(scope.row.id)">运维电子围栏</a>
      </template>
    </el-table-column>

    <el-table-column label="骑行电子围栏" v-if="areaBikeFencing" >
      <template slot-scope="scope">
        <a class="area" @click="handleAreaBike(scope.row.id)">骑行电子围栏</a>

      </template>
    </el-table-column>
<!--系统设置 下面的区域管理结束-->

    <el-table-column label="操作" v-if="treeType === 'normal'" width="260">
      <template slot-scope="scope">

        <button type="button" class="el-button el-button--default el-button--small"
                @click="handleUpdate(scope.row.id)">修改
        </button>

        <el-button size="small" @click="handleDelete(scope.row.id)" type="info">
          删除
        </el-button>

        <button type="button" class="el-button el-button--primary el-button--small"
                @click="handleAdd(scope.row.parentIds,scope.row.label,scope.row.id,scope.row.name)"> 添加下级树结构
        </button>

      </template>
    </el-table-column>
  </el-table>
</template>
<script>
  import DataTransfer from '../../../utils/dataTranslate.js'
  //  import Vue from 'vue'
  import bus from '@/assets/js/eventBus.js'

  export default {
//    name: 'tree-grid',
    props: {
// 该属性是确认父组件传过来的数据是否已经是树形结构了，如果是，则不需要进行树形格式化
      treeStructure: {
        type: Boolean,
        default: function () {
          return false
        }
      },
// 这是相应的字段展示
      columns: {
        type: Array,
        default: function () {
          return []
        }
      },
// 这是数据源
      dataSource: {
        type: Array,
        default: function () {
          return []
        }
      },
// 这个作用是根据自己需求来的，比如在操作中涉及相关按钮编辑，删除等，需要向服务端发送请求，则可以把url传过来
      requestUrl: {
        type: String,
        default: function () {
          return ''
        }
      },
// 这个是是否展示操作列
      treeType: {
        type: String,
        default: function () {
          return 'normal'
        }
      },
      // 系统设置 区域管理下面的按钮
      areaOpsFencing: {
        type: Boolean,
        default: function () {
          return false
        }
      },
      areaBikeFencing: {
        type: Boolean,
        default: function () {
          return false
        }
      },
// 是否默认展开所有树
      defaultExpandAll: {
        type: Boolean,
        default: function () {
          return false
        }
      }
    },
    data () {
      return {}
    },
    computed: {
      // 格式化数据源
      data: function () {
        let me = this
        if (me.treeStructure) {
          let data = DataTransfer.treeToArray(me.dataSource, null, null, me.defaultExpandAll)
          // console.log(data)
          return data
        }
        return me.dataSource
      }
    },
    methods: {
      // 显示行
      showTr: function (row, index) {
        let show = (row._parent ? (row._parent._expanded && row._parent._show) : true)
        row._show = show
        return show ? '' : 'display:none;'
      },
      // 展开下级
      toggle: function (trIndex) {
        let me = this
        let record = me.data[trIndex]
        record._expanded = !record._expanded
      },
      // 显示层级关系的空格和图标
      spaceIconShow (index) {
        let me = this
        if (me.treeStructure && index === 0) {
          return true
        }
        return false
      },
      // 点击展开和关闭的时候，图标的切换
      toggleIconShow (index, record) {
        let me = this
        if (me.treeStructure && index === 0 && record.children && record.children.length > 0) {
          return true
        }
        return false
      },
      // 编辑事件
      handleUpdate (id) {
        bus.$emit('updateBtn', id)
      },
      // 删除事件
      handleDelete (id) {
        bus.$emit('delBtn', id)
      },
      // 添加下级树结构
      handleAdd (parentIds, label, id, name) {
        bus.$emit('addBtn', parentIds, label, id, name)
      },
      handleAreaOps (id) {
        bus.$emit('areaOps', id)
      },
      handleAreaBike (id) {
        bus.$emit('areaBike', id)
      }
    }
  }
</script>

<style>
  .ms-tree-space {
    position: relative;
    top: 1px;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    width: 18px;
    height: 14px;
  }
  .el-table .cell, .el-table th>div {
    padding-left: 0!important;
    padding-right: 0!important;
  }
.area{
  color:#20a0ff;
  cursor:pointer
}
  .ms-tree-space::before {
    content: ""
  }

  table td {
    line-height: 26px;
  }
  .el-table .cell {
    word-break: normal !important;
  }
  .el-table th,.el-table__row {
    text-align: center;
  }
.el-table_1_column_1{
  text-align: left;
}
  .el-table_1_column_9, .el-table_1_column_10{
    width:50px;
  }
</style>
