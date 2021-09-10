<template>
    <div class="banner-container">
        <br/>
        <div class="banner-text">
            <vue-typed-js
                :typeSpeed="30"
                :showCursor="false"
                :strings="[
                    `<div class=typed>
                        <div>
                          안녕하세요
                        </div>
                        <div>
                          개발자 박천주입니다.
                        </div>
          </div> ^1500`,
                ]"
            >
                <h5>
                    <span class="typing"></span>
                </h5>
            </vue-typed-js>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
    .typed {
      opacity: 0.8;
      width: 100%;
      height: 400px;
      font-size: 70px;
      color: white;
    }

    .banner-container {
      padding-top: 100px;
      width: 100%;
      height: 100%;
      display: flex;
      background: url("../assets/back1.jpg") 50% 50%;
      background-repeat: no-repeat;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 1;
    }
    /* .banner-container::after {
      width: 100%;
      height: 100%;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      background-attachment: fixed;
    } */
    .banner-text {
      font-size: 3rem;
      font-family: 'Noto Sans KR', sans-serif;
      margin-top: 3%;
      margin-right: 30%;
    }

    @media screen and (max-width: 1024px){
      .banner-container {
        width: 100%;
        margin:auto;
      }
      .typed {
        font-size: 1.5rem;
      }
    }

</style>
