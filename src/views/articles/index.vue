<template>
  <div class="articles-list">
    <div class="articles-wrap">
      <div class="article-item" v-for="(item, index) in dataList" :key="index">
        <div class="content-left">
          <div class="title">{{ item.title }}</div>
          <p class="desc">{{ item.description }}</p>
          <div class="bottom">
            <span><i>查看</i> {{ item.watched }}</span>
            <span><i>评论</i> {{ item.comments }}</span>
            <span><i>赞</i> {{ item.thumbsUp }}</span>
            <span>{{ item.createtime }}</span>
          </div>
        </div>
        <div class="content-right">
          <img :src="item.image" />
        </div>
      </div>
      <div class="bottom-msg">--------- 我也是有底线的啦 ---------</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "articleList",

  data() {
    return {
      dataList: [
        {
          id: "1",
          title:
            "本站不再更新文章，笔者的文章只更新到 GitHub 和公众号上了，大佬们可以到 GitHub 找到我",
          description:
            "本站不再更新文章，笔者的文章只更新到 GitHub 和公众号上了，大佬们可以到 GitHub 找到我本站不再更新文章，笔者的文章只更新到 GitHub 和公众号上了，大佬们可以到 GitHub本站不再更新文章，笔者的文章只更新到 GitHub 和公众号上了，大佬们可以到 GitHub 找到我本站不再更新文章，笔者的文章只更新到 GitHub 和公众号上了，大佬们可以到 GitHub 找到我 找到我",
          content: "我是一段文字",
          label: "测试",
          watched: 100,
          comments: 100,
          thumbsUp: 100,
          createtime: "2020-12-28 10:20:10",
          top: true,
          image: require("../../assets/images/articles.jpg"),
        },
        {
          id: "2",
          title:
            "本站不再更新文章，笔者的文章只更新到 GitHub 和公众号上了，大佬们可以到 GitHub 找到我",
          description:
            "本站不再更新文章，笔者的文章只更新到 GitHub 和公众号上了，大佬们可以到 GitHub 找到我",
          content: "我是一段文字",
          label: "测试",
          watched: 100,
          comments: 100,
          thumbsUp: 100,
          createtime: "2020-12-28 10:20:10",
          top: true,
          image: require("../../assets/images/articles.jpg"),
        },
        {
          id: "3",
          title:
            "GitHub 找本站不再更新文章，笔者的文章只更新到 GitHub 和公众号上了，大佬们可以到 本站不再更新文章，笔者的文章只更新到 GitHub 和公众号上了，大佬们可以到 本站不再更新文章，笔者的文章只更新到 GitHub 和公众号上了，大佬们可以到 本站不再更新文章，笔者的文章只更新到 GitHub 和公众号上了，大佬们可以到 到我",
          description:
            "本站不再更新文章，笔者的文章只更新到 GitHub 和公众号上了，大佬们可以到 本站不再更新文章，笔者的文章只更新到 GitHub 和公众号上了，大佬们可以到 本站不再更新文章，笔者的文章只更新到 GitHub 和公众号上了，大佬们可以到 本站不再更新文章，笔者的文章只更新到 GitHub 和公众号上了，大佬们可以到 本站不再更新文章，笔者的文章只更新到 GitHub 和公众号上了，大佬们可以到 本站不再更新文章，笔者的文章只更新到 GitHub 和公众号上了，大佬们可以到 佬们可以到 GitHub 找到我",
          content: "我是一段文字",
          label: "测试",
          watched: 100,
          comments: 100,
          thumbsUp: 100,
          createtime: "2020-12-28 10:20:10",
          top: true,
          image: require("../../assets/images/articles.jpg"),
        },
      ],
    };
  },
};
</script>
<style lang="less">
@height: 100vh/960px;
@width: 100vw/1920px;

.article-list {
  margin-top: 20px * @height;
  height: 100%;
  width: 100%;
}
.bottom-msg {
  text-align: center;
  color: #333;
  height: 30px * @height;
  line-height: 30px * @height;
}

.article-item {
  height: 160px;
  width: 100%;
  margin: 10px * @height 0;
  padding: 10px * @height 10px * @width;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;

  .content-left {
    height: 100%;
    flex: 1;
    text-align: start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: PingFangSC-Regular, PingFang SC;
    margin-right: 20px * @width;

    .title {
      font-size: 18px;
      color: #000;
      line-height: 26px;
      // height: 54px * @height;
      font-weight: 900;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .desc {
      margin: 10px * @height 0;
      font-size: 14px;
      color: #666;
      line-height: 22px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .bottom {
      font-size: 12px * @width;
      color: #666;

      & > span {
        margin-right: 6px * @width;
      }

      & > span:last-child {
        margin-left: 6px * @width;
      }
    }
  }

  .content-right {
    height: 100%;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100px;
      width: 120px;
    }
  }
}
</style>