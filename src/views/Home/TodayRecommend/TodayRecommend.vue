<template>
  <div class="today-recommend">
    <div class="py-container">
      <ul class="recommend" v-for="recomm in recommends" :key="recomm.id">
        <li class="clock">
          <div class="time">
            <img v-lazy="recomm.bigImg" />
            <h3>{{ recomm.text }}</h3>
          </div>
        </li>
        <li class="banner" v-for="rec in recomm.carouselList" :key="rec.id">
          <img v-lazy="rec.imgUrl" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "TodayRecommend",
  computed: {
    ...mapState({
      recommends: (state) => state.home.recommends,
    }),
  },
  methods: {
    ...mapActions(["getRecommends"]),
  },
  mounted() {
    this.getRecommends();
  },
};
</script>

<style  lang="less" scoped>
.today-recommend {
  .py-container {
    width: 1200px;
    margin: 0 auto;

    .recommend {
      height: 165px;
      background-color: #eaeaea;
      margin: 10px 0;
      display: flex;

      .clock {
        width: 16.67%;
        background-color: #5c5251;
        color: #fff;
        font-size: 18px;
        text-align: center;

        .time {
          padding: 30px 0;
        }

        h3 {
          margin: 9px 0;
          font-weight: 700;
          font-size: 18px;
          line-height: 30.06px;
        }
      }

      .banner {
        width: 20.83%;

        img {
          width: 100%;
          height: 100%;
          transition: all 400ms;

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
}
</style>
