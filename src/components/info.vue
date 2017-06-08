<template id="box-template-one">
    <div class="details-one">
        <div class="picture"></div>
        <h3>{{personalData.name}}</h3>
        <ul>
            <li v-for="item in personalData.info">{{item}}</li>
        </ul>
        <h3> {{educationalExperience.name}} </h3>
        <ul>
            <li v-for="item in educationalExperience.info">{{item}}</li>
        </ul>
        <h3> {{internExperience.name}} </h3>
        <ul>
            <li v-for="item in internExperience.info">{{item}}</li>
        </ul>
        <h3> {{involvedProjects.name}} </h3>
        <ul>
            <li v-for="item in involvedProjects.info">{{item}}</li>
        </ul>
        <h3> {{studentsWorkingExperience.name}} </h3>
        <ul>
            <li v-for="item in studentsWorkingExperience.info">{{item}}</li>
        </ul>
        <h3> {{certificateAndWinningExperience.name}} </h3>
        <ul>
            <li v-for="item in certificateAndWinningExperience.info">{{item}}</li>
        </ul>
        <h3> {{selfEvaluation.name}}</h3>
        <ul>
            <li v-for="item in selfEvaluation.info">{{item}}</li>
        </ul>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
            personalData:{},
            educationalExperience:{},
            internExperience:{},
            involvedProjects:{},
            studentsWorkingExperience:{},
            certificateAndWinningExperience:{},
            selfEvaluation:{}
    }
  },
    mounted() {
        this.info();
    },
  methods:{
        info:function(){
            Axios({
                method: 'get',
                url: '../../../data/data.json',
            }).then((response) => {
                console.log(response);
                this.personalData = response.data[0].personalData;
                this.educationalExperience = response.data[0].educationalExperience;
                this.internExperience = response.data[0].internExperience;
                this.involvedProjects = response.data[0].involvedProjects;
                this.studentsWorkingExperience = response.data[0].studentsWorkingExperience;
                this.certificateAndWinningExperience = response.data[0].certificateAndWinningExperience;
                this.selfEvaluation = response.data[0].selfEvaluation;
            })
        }
    }
}
</script>