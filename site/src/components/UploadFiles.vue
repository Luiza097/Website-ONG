<template>
    <div class="file">
        <form @submit.prevent="onSubmit" enctype="multipart/form-data">
            <div class="fields">
                <label>Upload File</label><br>
                <input 
                type="file"
                ref="file"
                @change="onSelect"
                />
            </div>
            <div class="fields">
                <button>Submit</button>
            </div>
            <div class="message">
                <h5>{{ message }}</h5>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            file: "",
            message: ""
        }
    },
    methods: {
        onSelect(){
            const file = this.$refs.file.files[0];
            this.file = file;
        },
        async onSubmit(){
            const formData = new FormData();
            formData.append('file', this.file)

            try {
                await axios.post('/upload', formData);
                this.message = 'Uploaded !! '
            } catch (error) {
                console.log(error)
                this.message = 'Something went wrong !! '
            }
        },
    },
}
</script>