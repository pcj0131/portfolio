import Vue from 'vue';

// 설치했던 fontawesome-svg-core와 vue-fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// 아이콘 추가
import {
  faHome, faUser, faBook, faBriefcase, faMobile, faEnvelope, faTag, faFile,
} from '@fortawesome/free-solid-svg-icons';

// 사용할 때는 앞에 fa를 제외하고, <font-awesome-icon :icon="['fas','home']"/> 처럼 사용합니다.
library.add(faHome, faUser, faBook, faBriefcase, faMobile, faEnvelope, faTag, faFile);

// fontawesome아이콘을 Vue탬플릿에 사용할 수 있게 등록해 줍니다.
Vue.component('font-awesome-icon', FontAwesomeIcon);
