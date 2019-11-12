<template>
  <a-upload
    name="file"
    :multiple="true"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :headers="headers"
    @change="handleChange"
  >
    <a-button type="primary">
      <a-icon type="upload" />上传文件
    </a-button>
  </a-upload>
</template>
<script>
export default {
  data() {
    return {
      headers: {
        authorization: "authorization-text"
      }
    };
  },
  methods: {
    handleChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        this.$message.success(`${info.file.name} 文件上传成功！`);
      } else if (info.file.status === "error") {
        this.$message.error(`${info.file.name} 文件上传失败！`);
      }
    }
  }
};
</script>