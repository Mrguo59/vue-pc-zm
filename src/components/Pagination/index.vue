<template>
  <div class="pagination">
    <button>上一页</button>
    <button>1</button>
    <button v-for="mapBtns in mapBtnsCount" :key="mapBtns">
      {{ mapBtns }}
    </button>
    <button>下一页</button>
    <button>总数：xxx</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    pageSize: {
      type: Number,
      default: 5,
    },
    pagerCount: {
      type: Number,
      validator(val) {
        return val >= 5 && val <= 21 && val % 2 === 1;
      },
      default: 7,
    },
    total: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      myCurrentPage: this.currentPage,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.pageSize);
    },
    startEnd() {
      const { myCurrentPage, pagerCount, totalPages } = this;

      const count = pagerCount - 2;

      const helfCount = Math.floor(count / 2);

      let start, end;

      if (totalPages - helfCount <= myCurrentPage) {
        start = totalPages - count;
      } else {
        start = myCurrentPage - helfCount;
      }

      if (start <= 1) {
        start = 2;
      }

      end = start + count - 1;

      return {
        start,
        end,
      };
    },
    mapBtnsCount() {
      const { start, end } = this.startEnd;
      const count = end - start + 1;
      return count >= 1 ? count : 0;
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  display: flex;
  white-space: nowrap;
  font-weight: 700;
  button {
    margin: 0 5px;
    padding: 0 4px;
    font-size: 13px;
    min-width: 30px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: none;
    outline: none;
    display: block;
    background-color: #f4f4f5;
    color: #606266;
    border-radius: 2px;
  }
}

button.active {
  background-color: #409eff;
  color: #fff;
}
</style>
