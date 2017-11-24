<template>
<div class="sidebar">
  <ul>
    <li v-for="(item,index) in items" :key="index">
        <div class="onelevel" v-on:click="updown">
          <span>{{item.name}}</span><em class="iconfont mange-down"></em>
        </div>
        <dl class="twolevel">
          <dd v-for="(item,index) in item.list" :key="index">
            <router-link :to="{ name:item.router , params: {} }">{{item.name}}</router-link>
          </dd>
        </dl>
    </li>

  </ul>
</div>
</template>
<script>
export default {
  data() {
    return {
      items: [{
          'id': '1',
          'name': '功能',
          'list': [{
              'id': '11',
              'name': '列表',
              'router': 'tabel'
            },
            {
              'id': '12',
              'name': '表单',
              'router': 'form'
            }
          ]
        },
        {
            'id': '2',
            'name': '功能',
            'list': [{
                'id': '21',
                'name': '列表',
                'router': 'tabel'
              },
              {
                'id': '22',
                'name': '表单',
                'router': 'form'
              }
            ]
          }
      ]
    };
  },
  methods: {
    updown: function() {}
  },
  computed: {}
};
</script>
<style>
.sidebar {
  width: 100%;
}
.sidebar ul li {
  display: block;
  width: 100%;
  line-height: 45px;
  color: #fff;
}
.sidebar ul li div.onelevel {
  height: 45px;
  line-height: 45px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  cursor: pointer;
}

.sidebar ul li div.onelevel span {
  padding-left: 20px;
  line-height: 45px;
}

.sidebar ul li .twolevel {
  display: block;
  background-color: rgba(0, 0, 0, 0.3);
}

.sidebar ul li .twolevel dd a {
  height: 40px;
  line-height: 40px;
  color: rgba(255, 255, 255, .7);
  padding-left: 20px;
}
.sidebar .iconfont {
  color: #fff;
  position: absolute;
  right: 20px;
}
</style>
