<template>
    <section class="skill-container">
        <div class="skill-title">
            <h1 class="title is-1">Skill</h1>
        </div>
        <br/>
        <br/>
        <div class="skill-columns">
            <div class="columns is-mobile">
                <div class="skill-group column is-4 is-offset-1">
                    <div class="skill-subject"><strong>Language</strong></div>
                    <div class="skill-list">
                        <table class="skill-table">
                            <tr>
                                <td class="skill-line">
                                    <a class="image is-64x64" href="https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94_(%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D_%EC%96%B8%EC%96%B4)" target="_blank">
                                        <img src="../assets/java.png">
                                    </a>
                                </td>
                                <td class="skill-line">
                                    <a class="image is-64x64" href="https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8" target="_blank">
                                        <img src="../assets/js.png">
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <br/>
                    <div class="skill-subject"><strong>DBMS</strong></div>
                    <div class="skill-list">
                        <table class="skill-table">
                            <tr>
                                <td class="skill-line">
                                    <a class="image is-64x64" href="https://ko.wikipedia.org/wiki/MariaDB" target="_blank">
                                        <img src="../assets/mariadb.png">
                                    </a>
                                </td>
                                <td class="skill-line">
                                    <a class="image is-64x64" href="https://ko.wikipedia.org/wiki/%EC%98%A4%EB%9D%BC%ED%81%B4_%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4" target="_blank">
                                        <img src="../assets/oracledb.png">
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <br/>
                    <div class="skill-subject"><strong>Tools & Frameworks</strong></div>
                    <div class="skill-list">
                        <table class="skill-table">
                            <tr>
                                <td class="skill-line">
                                    <a class="image is-64x64" href="https://ko.wikipedia.org/wiki/%EC%8A%A4%ED%94%84%EB%A7%81_%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC" target="_blank">
                                        <img src="../assets/spring.png">
                                    </a>
                                </td>
                                <td class="skill-line">
                                    <a class="image is-64x64" href="https://ko.wikipedia.org/wiki/DBeaver" target="_blank">
                                        <img src="../assets/dbeaver.png">
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="skill-summary column is-6">
                    <div class="box skill-box">
                        <p class="skill-text">
                            <font-awesome-icon :icon="['fas','tag']"/> Spring Framework, eGovFrame을 활용한 웹 개발 경험
                        </p>
                        <br/>
                        <p class="skill-text">
                            <font-awesome-icon :icon="['fas','tag']"/> JPA, Hibernate를 이용한 ORM방식 개발 경험
                        </p>
                        <br/>
                        <p class="skill-text">
                            <font-awesome-icon :icon="['fas','tag']"/> MariaDB 등 RDBMS 사용 경험
                        </p>
                        <br/>
                        <p class="skill-text">
                            <font-awesome-icon :icon="['fas','tag']"/> Vue.js를 사용한 개발 경험
                        </p>
                        <br/>
                        <p class="skill-text">
                            <font-awesome-icon :icon="['fas','tag']"/> 기본적인 Linux 커맨드 사용 능력
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
    .skill-container {
        height: 100%;
        padding-top: 60px;
    }
    .skill-title {
        margin-top: 40px;
        text-align: center;
    }
    .skill-subject {
        font-size: 25px;
    }
    .skill-table {
        border-spacing: 10px;
        border-collapse: separate;
    }
    .skill-text {
        font-size: 20px;
    }
    @media screen and (max-width: 1024px) {
        .skill-title {
            margin-top: 3%;
        }
        .skill-group {
            width: 100%;
        }
        .image{
            max-width: 70%;
            height: auto;
        }
        .skill-text {
            font-size: 0.6rem;
        }
        .skill-subject {
            font-size: 0.6rem;
        }
        .skill-summary {
            width: 80%;
        }
        .caption {
            font-size: 0%;
        }
    }
</style>
