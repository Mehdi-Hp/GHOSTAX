<template>
    <article>
        <MdIntro />
        <MdInstallation />
        <MdUsage />
        <MdApi />
    </article>
</template>

<script>
import MdIntro from '~docs/PromiseObserver/Intro.md';
import MdInstallation from '~docs/PromiseObserver/Installation.md';
import MdUsage from '~docs/PromiseObserver/Usage.md';
import MdApi from '~docs/PromiseObserver/Api.md';

export default {
    name: 'PromiseObserver',
    components: {
        MdIntro,
        MdInstallation,
        MdUsage,
        MdApi
    },
    props: {},
    data() {
        return {};
    }
};
</script>
