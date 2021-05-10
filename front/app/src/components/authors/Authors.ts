import { Component, Prop, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
  computed: mapGetters({ authors: "authorsWithBooks" }),
})
export default class Authors extends Vue {}
