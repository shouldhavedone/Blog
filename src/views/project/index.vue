<template>
  <div class="project-container">
    <div class="project-wrap">
      <template v-for="(item, index) in dataList">
        <el-card :key="index" class="project-item" shadow="hover">
          <a :href="item.link" target="_block">
            <img :src="item.image" class="image" />
            <div class="content-box">
              <div>{{ item.name }}</div>
              <div>{{ item.desc }}</div>
              <div class="bottom">
                <time class="time"
                  >{{ item.starttime }} -- {{ item.endtime }}</time
                >
              </div>
            </div>
          </a>
        </el-card>
      </template>
    </div>
    <div class="bottom-msg">--------- 我也是有底线的啦 ---------</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [
        {
          link: "#",
          name: "好吃的汉堡",
          image:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          desc:
            "我是一个好吃的汉堡包我是一个好吃的汉堡包我是一个好吃的汉堡包我是一个好吃的汉堡包我是一个好吃的汉堡包我是一个好吃的汉堡包我是一个好吃的汉堡包我是一个好吃的汉堡包",
          starttime: "2020-12-28",
          endtime: "2020-12-30",
        },
        {
          link: "#",
          name: "好吃的汉堡",
          image:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          desc: "我是一个好吃的汉堡包",
          starttime: "2020-12-28",
          endtime: "2020-12-30",
        },
        {
          link: "#",
          name: "好吃的汉堡",
          image:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          desc: "我是一个好吃的汉堡包",
          starttime: "2020-12-28",
          endtime: "2020-12-30",
        },
      ],
      currentDate: new Date(),
    };
  },
};
</script>
<style lang="less">
@height: 100vh/960px;
@width: 100vw/1920px;

.project-container {
  height: 100%;
  width: 100%;
  padding: 36px * @height 10px * @width;

  .project-wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .project-item {
      width: 48%;
      margin-bottom: 30px * @height;
      border: 1px solid #eee;

      a {
        color: #000;
      }

      .content-box {
        height: 110px;
        margin-top: 36px * @height;
        padding: 0 4px;

        & > div:first-child {
          font-size: 18px;
          font-weight: 900;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        & > div:nth-child(2) {
          height: 70px;
          padding-top: 10px;
          line-height: 20px;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }

      .time {
        font-size: 13px;
        color: #999;
      }

      .bottom {
        margin-top: 13px;
        line-height: 12px;
      }

      .image {
        width: 100%;
        height: 300px * @height;
        display: block;
        border-radius: 2px;
      }
    }
  }

  .bottom-msg {
    text-align: center;
    color: #333;
    height: 30px * @height;
    line-height: 30px * @height;
    letter-spacing: 3px;
  }
}
</style>