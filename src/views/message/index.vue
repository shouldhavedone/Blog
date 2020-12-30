<template>
  <div class="message-container">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email" clearable></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="tel">
        <el-input v-model="ruleForm.tel" clearable></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name" clearable></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input type="textarea" v-model="ruleForm.content" :rows="3" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >留言</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { validTel, validEmail } from "@/utils/auth";

export default {
  data() {
    return {
      ruleForm: {
        name: "",
        email: "",
        tel: "",
        content: "",
      },
      rules: {
        name: [
          { required: true, message: "姓名不能为空", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        tel: [{ required: true, trigger: "blur", validator: validTel }],
        email: [{ required: true, trigger: "blur", validator: validEmail }],
        content: [
          { required: true, message: "留言内容不能为空", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less">
@height: 100vh/960px;
@width: 100vw/1920px;

.message-container {
  height: 100%;
  width: 100%;
  padding: 20px * @height 20px * @width;
  margin-top: 60px * @height;

  .demo-ruleForm .el-button {
    margin-top: 20px * @height;
    margin-right: 30px * @width;
  }
}
</style>