<template>
    <div>
        <div class="discord-log">
            <b-form-textarea
                v-model="discordToken"
                rows="10"
            ></b-form-textarea>
        </div>
    </div>
</template>

<script lang="ts">
import 'reflect-metadata';
import { TYPES } from '@/types';
import { inject } from 'inversify-props';
import Vue from 'vue';

export default class DiscordView extends Vue {
    @inject(TYPES.DiscordToken) private discordToken!: string;
}

</script>
<style>
.discord-log {
    padding-left: 5px;
    padding-right: 5px;
    color: black;
}
</style>
