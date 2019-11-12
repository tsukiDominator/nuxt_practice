<template>
  <div class="clearfix">
    <a-upload :fileList="fileList" :remove="handleRemove" :beforeUpload="beforeUpload">
      <a-button>
        <a-icon type="upload" />Select File
      </a-button>
    </a-upload>
    <a-button
      type="primary"
      @click="handleUpload"
      :disabled="fileList.length === 0"
      :loading="uploading"
      style="margin-top: 16px"
    >{{uploading ? 'Uploading' : 'Start Upload' }}</a-button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      fileList: [],
      uploading: false
    };
  },
  methods: {
    handleRemove(file) {
      const index = this.fileList.indexOf(file);
      const newFileList = this.fileList.slice();
      newFileList.splice(index, 1);
      this.fileList = newFileList;
    },
    beforeUpload(file) {
      this.fileList = [...this.fileList, file];
      return false;
    },
    handleUpload() {
      const { fileList } = this;
      const formData = new FormData();
      fileList.forEach(file => {
        formData.append("files[]", file);
      });
      this.uploading = true;

      // You can use any AJAX library you like
      axios
        .post("your url", formData)
        .then(res => {
          this.fileList = [];
          this.uploading = false;
          this.$message.success("上传成功.");
          console.log("服务端返回讯息：", res);
        })
        .catch(res => {
          this.uploading = false;
          this.$message.error("上传失败.");
          console.log("服务端返回讯息：", res);
        });
    }
  }
};
</script>