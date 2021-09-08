<template>
    <section class="about-container">
        <div class="about-title">
            <h1 class="title is-1">About</h1>
        </div>
        <br/>
        <br/>
        <div class="columns is-mobile">
            <div class="column is-half is-offset-one-quarter">
                <figure class="image is-128x128">
                    <img class="is-rounded" src="../assets/about_pic.jpg">
                </figure>
                <p class="contact">
                   <strong><font-awesome-icon :icon="['fas','mobile']"/> 010-3450-9244</strong>
                   <br/>
                   <font-awesome-icon :icon="['fas','envelope']"/><strong> pcj8801@gmail.com</strong>
                </p>
            </div>
        </div>
        <div class="profile-container">
            <div class="columns is-mobile">
                <p class="profile-text column is-three-fifths is-offset-one-fifth">
                    현업에서의 개발을 경험하며 새로운 기술을 도입하고 최적화하는 것에
                    흥미를 느꼈습니다.
                    이론적으로 배운 지식이 실제로 어디에 적용되면
                    더 높은 완성도로 프로젝트를 만들 수 있을지 부서의 구성원들과
                    적극적인 대화를 통해 함께 고민하며 혐업해 왔습니다.
                    <br/><br/>
                    빠르게 변화하는 IT업계에서 뒤쳐지지 않기 위해 겸손하고 열린 마음으로
                    꾸준한 자기 개발을 통해 성장하는 개발자가 되도록 노력하겠습니다.
                </p>
            </div>
        </div>
    </section>
</template>

<style>
    .about-container {
        height: 100%;
        padding-top: 60px;
    }
    .about-title {
        margin-top: 40px;
        text-align: center;
    }

    .profile-container {
        text-align: left;
        line-height: 150%;
        margin-top: 3%;
        /* margin-left: 10%; */
    }
    .profile-text {
        white-space: pre-line;
    }
    .image {
        display: block;
        margin: 0 auto;
    }
    .contact {
        text-align: center;
    }

    @media screen and (max-width: 1024px) {
        .about-container {
            width: 100%;
            margin: 0 auto;
        }
        .profile-text {
            font-size: 0.6rem;
            white-space: pre-line;
        }
    }
</style>
