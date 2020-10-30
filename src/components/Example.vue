<template>
  <div class="example">
    <ul>
        <li v-for="item in filtered_fructs" v-bind:key="item.id">{{ item.name }}</li>
    </ul>
    <input type="text" v-model="input_str">
  </div>
</template>

<script>
export default {
  data () {
    return {
        input_str: '',
        
        fructs: [
            {id: 1, name: 'яблоко'},
            {id: 2, name: 'груша'},
            {id: 3, name: 'банан'},
            {id: 4, name: 'киви'},
            {id: 5, name: 'ананас'},
            {id: 6, name: 'папайя'},
            {id: 7, name: 'мандарин'},
            {id: 8, name: 'апельсин'},
            {id: 9, name: 'айва'},
            {id: 10, name: 'лимон'},
        ],
    }
  },
  computed:{
    filtered_fructs: function(){
    
    let input = this.input_str;

        return this.fructs.filter(item => {
            return item.id == input;
        });

        },
    },
};
</script>

<style lang="scss">
.example {
    width: 388px;
    height: 254px;
    background: rgba(255, 255, 255, 0.42);
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    ul{
        display: flex;
        width: 100%;
        justify-content: center;
        height: 0;
        padding: 0;
        margin-bottom: 0;
        margin-top: 0;
        li{
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 36px;
            list-style-type: none;
            text-transform: capitalize;
        }
    }
    input{
        width: 124px;
        height: 48px;
        outline: none;
        border: none;
        font-size: 36px;
        color: #000;
        text-align: center;
        caret-color: transparent;
    }
}
</style>