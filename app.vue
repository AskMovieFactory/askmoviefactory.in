<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<style>
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

    @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Schoolbell&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Mansalva&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Sedgwick+Ave+Display&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
    
    @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');




    .page-enter-active,
    .page-leave-active {
        transition: opacity 0.5s;
        transition-property: background-color, border-color, color, fill, stroke,
            opacity, box-shadow, transform, filter, backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 169ms;
    }
    .page-enter,
    .page-leave-active {
        opacity: 0;
        transition-duration: 420ms;
    }
</style>
