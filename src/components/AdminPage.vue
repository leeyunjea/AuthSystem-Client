<template>
  <div id="AdminPage">
    <h1>{{ msg }}</h1>
     <h2>Admin Page</h2>
<p>
    <ul>
    
<table
    class="type06"
>
<tr class="even">
    <th>Id</th>
    <th>Name</th>
    <th>Email</th>
    <th>Update</th>
    <th>Delete</th>
</tr>
    <tr v-for="user in users">
      <td> {{ user.userId }} </td> 
      <td>{{user.name}} </td>
      <td>{{user.email}} </td>
      <td><button @click="update">Update</button></td>
      <td><button @click="filter">Delete</button></td>

    </tr>
    </table>

    </ul>
</p>

<!-- <vue-virtual-table
    :config="tableConfig"
    :data="tableData"
    :height="800"
    :itemHeight="55"
    :minWidth="1000"
    :selectable="true"
    :enableExport="true"
    v-on:changeSelection="handleSelectionChange"
  >

  <template slot-scope="scope" slot="actionCommon">
      <button @click="edit(scope.index, scope.row)">Edit</button>
      <button @click="del(scope.index, scope.row)">Delete</button>
    </template>

  </vue-virtual-table> -->

    
    
   
  </div>
  

</template>

<script>
import axios from "axios";
import VueVirtualTable from "vue-virtual-table";

export default {
  el: "AdminPage",
  name: "AdminPage",

  components: {
    VueVirtualTable
  },

  props: {
    msg: String,
    users: Array
  },

  data: {
    // users: '',
    users: [
      {
        userId: "",
        name: "",
        email: ""
      }
    ],
    tableConfig: [
      { prop: "user", name: "User Name", searchable: true },
      { prop: "age", name: "Age", numberFilter: true }
    ],
    tableData: [
      { user: "a1", age: 20 },
      { user: "a2", age: 21 },
      { user: "a3", age: 23 }
    ]
  },

  created() {
    // this.fetchData(token);
    debugger;
    axios
      .post("http://localhost:8082/api/admin/listUsers")
      .then(response => {
        debugger;
        this.users = response.data;
      })
      .catch(e => {
        debugger;
        // location.href = "./login";
        this.errors.push(e);
      });
  },

  methods: {
    handleSelectionChange(rows) {
      console.log(rows);
    },
    edit(index, row) {
      console.log(index);
    },
    del(index, row) {
      console.log(index);
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
div {
    align-content: center;
}
table {
    /* padding: 0;
    height : 500;
    border: 1;
    align-content: center; */
    margin-left: 36%;
    itemHeight : 40;
    
    minWidth : '1000';
    selectable:'true';
    enableExport:'true';
}
td {
  /* display: table-cell;
  border: 1px solid #333;
  vertical-align: middle;
  height:50px; */
}
th {
    /* background-color: coral; */
}
table.type06 {
    border-collapse: collapse;
    text-align: left;
    line-height: 1.5;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin: 20px 10px;
}
table.type06 th {
    width: 150px;
    padding: 10px;
    font-weight: bold;
    vertical-align: top;
}
table.type06 td {
    width: 350px;
    padding: 10px;
    vertical-align: top;
}
table.type06 .even {
    background: #efefef;
}
</style>
