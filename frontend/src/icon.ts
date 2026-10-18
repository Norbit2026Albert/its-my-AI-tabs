import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add Free Font Awesome Icons
// https://fontawesome.com/v7/search?ic=free&o=r
// In order to add an icon, you have to:
// 1) add the icon name in the import statement below;
// 2) add the icon name to the library.add() statement below.
import {
    faArrowLeft,
    faArrowRotateLeft,
    faArrowRightFromBracket,
    faArrowRightToBracket,
    faBars,
    faCheck,
    faDrum,
    faFile,
    faKeyboard,
    faGuitar,
    faFolder,
    faGear,
    faHeadphones,
    faMagnifyingGlass,
    faMusic,
    faPause,
    faPen,
    faPlay,
    faPlus,
    faRepeat,
    faStar,
    faStopwatch,
    faTrash,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

library.add([
    faFile,
    faKeyboard,
    faGuitar,
    faFolder,
    faGear,
    faArrowRightFromBracket,
    faPlus,
    faPlay,
    faPause,
    faCheck,
    faXmark,
    faArrowRightToBracket,
    faBars,
    faMagnifyingGlass,
    faStar,
    faStarRegular,
    faArrowLeft,
    faArrowRotateLeft,
    faPen,
    faTrash,
    faDrum,
    faHeadphones,
    faMusic,
    faRepeat,
    faStopwatch,
]);

export { FontAwesomeIcon };
