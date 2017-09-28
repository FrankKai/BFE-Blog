<template>
    <div class="home">
        <div class = 'header'>
            <img class = "avatar" src="../assets/images/avatar.jpg"></img>
        </div>
        <div class = 'content'>
            <a href="https://github.com/FrankKai">Github</a>
            <a href="https://segmentfault.com/u/chennihuannianqing">segmentFault</a>
            <a href="https://www.zhihu.com/people/ting-zhao-wu-yue-tian-da-lan-qiu/activities">知乎</a>
            <a href="http://www.jianshu.com/u/ff2903c0af37">简书</a>
        </div>
        <div class= 'blog-router'>
            <a href="http://localhost:8081/#/home/id">>>进入博客</a>
        </div>
        <div class = 'footer'>
            <p>©2017 ❤趁你还年轻</p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'home'
}
</script>

<style lang="scss">
a{
    padding: 15px;
    font-weight: bold;
    text-decoration: none;
    border-radius:30% 30%;
    &:link{
        /* color:rgba(0,0,255,.8); */
        color:chocolate;
        background-color:#DFFCB5;
    }
    &:hover{
        background-color:gold;
    }
    &:active{
        /* color: rgba(0,0,255,.3); */
        color:coral;
    }
    /*保证访问过的标签颜色不变为难看的紫色*/
    &:visited{
        /* color:rgba(0,0,255,.3); */
        color:chocolate;
    }
}
.home {
    div{
        margin: 40px;
    }
}
.avatar{
    border-radius:25% 50%;
}
/* .content{
    a{
        padding:10px;
    }
}
.blog-router{
    a{
        padding:10px;
    }
} */
.footer{
    p{
        font-weight: bold;
        color:chocolate;
    }
}
</style>