
import interesting_001 from "../img/interesting/interesting_001.png"
import interesting_002 from "../img/interesting/interesting_002.png"
import interesting_003 from "../img/interesting/interesting_003.png"
import interesting_004 from "../img/interesting/interesting_004.png"

import youtube_001 from "../img/youtube/youtube-js-001.png"
import youtube_002 from "../img/youtube/youtube-js-002.png"
import youtube_003 from "../img/youtube/youtube-react-001.png"
import youtube_004 from "../img/youtube/youtube-css-001.png"

export const showcases = {
    interesting:
        [
            {
                id: "interesting" + 1,
                src: interesting_001,
                alt: "Tesla Bot",
                link: "https://www.youtube.com/watch?v=UXHoWNfjJYM&t=339s",
                title: "Elon Musk reveals a humanoid robot at Tesla AI Day 2022",
                date: new Date("2022.10.01")
            },
            {
                id: "interesting" + 2,
                src: interesting_002,
                alt: "Tesla Bot",
                link: "https://www.youtube.com/watch?v=XiQkeWOFwmk",
                title: "Tesla Bot Update",
                date: new Date("2023.05.16")
            },
            {
                id: "interesting" + 3,
                src: interesting_003,
                alt: "Friderikusz Podcast",
                link: "https://www.youtube.com/watch?v=p3EEIwEIlMs&t=958s",
                title: "AI - Promising or scaring?",
                date: new Date("2023.03.23")
            },
            {
                id: "interesting" + 4,
                src: interesting_004,
                alt: "Innovatív hírek",
                link: "https://www.youtube.com/watch?v=EjiFEawYn88&t=408s",
                title: "Journey to the edge of the universe... and back",
                date: new Date("2021.05.29")
            },
        ],
    youtube:
        [
            {
                id: "youtube" + 1,
                src: youtube_001,
                alt: "Keresés listában 1.",
                link: "https://www.youtube.com/watch?v=z_8kjPVnDPo",
                title: "JavaScript",
                sec_title: "Keresés listában 1.",
                technology: "JavaScript",
                date: new Date("2023.03.12")
            },
            {
                id: "youtube" + 2,
                src: youtube_002,
                alt: "Ternális operátor",
                link: "https://www.youtube.com/channel/UC_NS9-02WvPjZpvKqkJf4vQ",
                title: "JavaScript",
                sec_title: "Ternális operátor",
                technology: "JavaScript",
                date: new Date("")
            },
            {
                id: "youtube" + 3,
                src: youtube_003,
                alt: "App létrehozása",
                link: "https://www.youtube.com/channel/UC_NS9-02WvPjZpvKqkJf4vQ",
                title: "ReactJS",
                sec_title: "App létrehozása",
                technology: "ReactJS",
                date: new Date("")
            },
            {
                id: "youtube" + 4,
                src: youtube_004,
                alt: "Miért nem működik",
                link: "https://www.youtube.com/channel/UC_NS9-02WvPjZpvKqkJf4vQ",
                title: "CSS",
                sec_title: "Miért nem működik",
                technology: "ReactJS",
                date: new Date("")
            },
        ]
};

