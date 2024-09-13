<script>
    export let margins = {left: '', center: '', right: ''}
</script>

<div class="absolute inset-x-[0.75in] top-0 h-[0.75in] w-[7in]">
    <div class="relative -left-8 top-6">{margins.left}</div>
    <div class="relative top-0 text-center">{margins.center}</div>
    <div class="relative -top-6 text-right">{margins.right}</div>
</div>
