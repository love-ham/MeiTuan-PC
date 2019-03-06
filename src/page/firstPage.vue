<template>
<div class="firstPage">
    <defaultLayout>
        <firstPage slot="main"></firstPage>
    </defaultLayout>

</div>
</template>
<script>
import defaultLayout from '../layout/default'
import firstPage from '../components/firstPage/index'
export default {
    components:{
       defaultLayout,
       firstPage
    }
}
</script>

