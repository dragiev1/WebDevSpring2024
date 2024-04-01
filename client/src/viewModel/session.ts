/*BH*/

import type { User } from "@/model/users";
import {reactive} from "vue";

const session = reactive ({
    user: null as User | null,
});

export const refSession = () => session;

