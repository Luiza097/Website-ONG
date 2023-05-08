<template>
    <div>
        <h2 class="text-center">Adicionar foto do Animal</h2>

        <div>
            <Imagens/>
        </div>
    </div>
</template>

<script>
import Imagens from '../components/UploadFiles'
export default {
    components: {
        Imagens
    }
}
</script>