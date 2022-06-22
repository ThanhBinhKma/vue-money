<template>
  <div>
    <div class="sidenav">
      <el-button type="text" @click="dialogVisible = true">Add</el-button>
    </div>
    <el-table :data="categories" style="width: 100%">
      <el-table-column label="Name" width="180" prop="name"> </el-table-column>
      <el-table-column label="Delete">
        <template slot-scope="scope">
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            @click="deleteCategory(scope.row._id)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="Tips" :visible.sync="dialogVisible" width="30%">
      <span>This is a message</span>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="Approved by">
          <el-input
            placeholder="Approved by"
            v-model="formInline.name"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">Query</el-button>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >Confirm</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Category",
  data() {
    return {
      dialogVisible: false,
      categories: [],
      formInline: {
        name: null,
      },
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    onSubmit() {
      axios
        .post("http://localhost:2711/api/category/store", {
          name: this.formInline.name,
        })
        .then((reponse) => console.log(reponse))
        .catch((err) => console.log(err));
    },
    fetchData() {
      axios
        .get("http://localhost:2711/api/category")
        .then((reponse) => {
          this.categories = reponse.data.data;
        })
        .catch((err) => console.log(err));
    },
    deleteCategory(id) {
      axios
        .delete(`http://localhost:2711/api/category/${id}`)
        .then((reponse) => {
          console.log(reponse);
          this.fetchData();
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
</style>