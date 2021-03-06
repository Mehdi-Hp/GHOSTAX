<template>
    <componenet
        :is="getComponentType()"
        :to="to"
        :class="[`button--${appearance}`]"
        class="button"
    >
        <svg-icon
            v-if="icon"
            :name="icon"
            class="button__icon"
        >
        </svg-icon>
        <span class="button__text">
            <slot />
        </span>
    </componenet>
</template>

<script>
import _isEmpty from 'lodash.isempty';

export default {
    name: 'BaseButtonAtom',
    props: {
        to: {
            type: [Object, String],
            required: false,
            default() {
                return {};
            }
        },
        icon: {
            type: String,
            required: false,
            default: ''
        },
        appearance: {
            type: String,
            required: false,
            default: 'primary',
            validator(value) {
                return ['primary', 'secondary', 'tertiary'].includes(value);
            }
        }
    },
    data() {
        return {};
    },
    computed: {
        isButton() {
            return _isEmpty(this.to);
        },
        isLink() {
            return !_isEmpty(this.to);
        }
    },
    methods: {
        getComponentType() {
            if (this.isButton) {
                return 'button';
            }
            if (this.isLink) {
                return 'router-link';
            }
        }
    }
};
</script>

<style scoped lang="scss">
.button {
  --border-radius: 5px;

  box: horizontal middle;
  color: gray(80);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 0 3px var(--box-shadow-color), 0 0 75px 0 var(--box-shadow-color);
  transition: background-color .1s, box-shadow .1s, transform .1s;
  padding: $grid $grid--medium;

  &--primary {
    --main-color: #{$color-primary-300};
    --main-color--hover: #{$color-primary-400};
    --box-shadow-color: #{$color-primary-200};

    background-color: var(--main-color);
    color: $color-primary-900;

    &:hover {
      background-color: var(--main-color--hover);
    }
  }

  &:active {
    box-shadow: 0 2px 0 3px var(--box-shadow-color), 0 0 75px 0 var(--box-shadow-color);
    transform: translateY(3px);
  }

  &__icon {
    position: relative;
    border-radius: var(--border-radius) 0 0 var(--border-radius);
    size: $grid--medium;
    z-index: 1;
    margin-right: $grid;
  }

  &__text {
    padding-right: $grid--normal;
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
  }
}
</style>
