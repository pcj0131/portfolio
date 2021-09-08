<template>
    <section class="career-container">
        <div class="career-title">
            <h1 class="title is-1">Career</h1>
        </div>
        <br/>
        <br/>
        <div class="career-columns">
            <div class="columns is-mobile">
                <div class="career-comapany column is-4 is-offset-1">
                    <p class="career-company-name"><strong>알앤디프로젝트 / Software Engineer</strong></p>
                    <p class="career-company-year">2020.09 ~ 2021.04</p>
                    <p class="career-company-text"><strong>MES 시스템 개발</strong> </p>
                </div>
                <div class="project-subject column is-7">
                    <div class="project-item" v-for="(project, index) in projects" :key="index">
                        <div class="project-name"><strong>{{ project.title }}</strong></div>
                        <div class="project-year">{{ project.year }}</div>
                        <div class="project-content">{{ project.content }}</div>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: '(주) 고*산업 MES시스템 개발',
          year: '(2021.03 ~ 2021.04)',
          content: `공정의 효율적인 운용 및 관리를 위한 서비스개발
                            각 공정에 필요한 문서양식 엑셀업로드/다운로드 기능 개발`,
        },
        {
          title: '(주) 태*식품 MES시스템 개발',
          year: '(2020.12 ~ 2021.03)',
          content: `프로젝트의 기본 설계, 상세 설계 참여
                            Java, Spring framework에 iBatis를 이용한 개발
                            Ubuntu에 Tomcat 웹서버 구축 및 MariaDB데이터베이스 구축`,

        },
      ],
    };
  },
  methods: {
    handleNwerLine(str) {
      return String(str).replace(/(?:\r\n|\r|\n)/g, '</br>');
    },
  },
};

</script>
<style>
    .career-container {
        height: 100%;
        padding-top: 60px;
    }

    .career-title {
        margin-top: 40px;
        text-align: center;
    }
    .career-company {
        border-bottom: 1px solid burlywood;
        width: 95%;
    }

    .career-company-name {
        font-size: 1.5rem;
        font-family: 'Noto Sans KR', sans-serif;
    }

    .project-content {
        white-space: pre-line;
    }
    @media screen and (max-width: 1024px) {
        .career-container {
            width: 100%;
        }
        .career-company-name {
            font-size: 0.8rem;
        }
        .career-company-year {
            font-size: 0.4rem;
        }
        .career-company-text {
            font-size: 0.6rem;
        }
        .project-name {
            font-size: 0.8rem;
        }
        .project-year {
            font-size: 0.6rem;
        }
        .project-content {
            font-size: 0.6rem;
        }
    }
</style>
