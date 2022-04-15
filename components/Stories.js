import StoryCard from "./StoryCard";

const stories = [
    {
        name: 'Cristiano Ronaldo',
        src: 'https://images.beinsports.com/W-Q_PY8sBnZEca2UGMeOg1OmEyo=/full-fit-in/1000x0/4228514-2022-04-09T133540Z_635587071_UP1EI4911RE3T_RTRMADP_3_SOCCER-ENGLAND-EVE-MUN-REPORT.JPG',
        profile: 'https://images.beinsports.com/W-Q_PY8sBnZEca2UGMeOg1OmEyo=/full-fit-in/1000x0/4228514-2022-04-09T133540Z_635587071_UP1EI4911RE3T_RTRMADP_3_SOCCER-ENGLAND-EVE-MUN-REPORT.JPG'
    },
    {
        name: 'Cristiano Ronaldo',
        src: 'https://images.beinsports.com/W-Q_PY8sBnZEca2UGMeOg1OmEyo=/full-fit-in/1000x0/4228514-2022-04-09T133540Z_635587071_UP1EI4911RE3T_RTRMADP_3_SOCCER-ENGLAND-EVE-MUN-REPORT.JPG',
        profile: 'https://images.beinsports.com/W-Q_PY8sBnZEca2UGMeOg1OmEyo=/full-fit-in/1000x0/4228514-2022-04-09T133540Z_635587071_UP1EI4911RE3T_RTRMADP_3_SOCCER-ENGLAND-EVE-MUN-REPORT.JPG'
    },
    {
        name: 'Cristiano Ronaldo',
        src: 'https://images.beinsports.com/W-Q_PY8sBnZEca2UGMeOg1OmEyo=/full-fit-in/1000x0/4228514-2022-04-09T133540Z_635587071_UP1EI4911RE3T_RTRMADP_3_SOCCER-ENGLAND-EVE-MUN-REPORT.JPG',
        profile: 'https://images.beinsports.com/W-Q_PY8sBnZEca2UGMeOg1OmEyo=/full-fit-in/1000x0/4228514-2022-04-09T133540Z_635587071_UP1EI4911RE3T_RTRMADP_3_SOCCER-ENGLAND-EVE-MUN-REPORT.JPG'
    },
    {
        name: 'Cristiano Ronaldo',
        src: 'https://images.beinsports.com/W-Q_PY8sBnZEca2UGMeOg1OmEyo=/full-fit-in/1000x0/4228514-2022-04-09T133540Z_635587071_UP1EI4911RE3T_RTRMADP_3_SOCCER-ENGLAND-EVE-MUN-REPORT.JPG',
        profile: 'https://images.beinsports.com/W-Q_PY8sBnZEca2UGMeOg1OmEyo=/full-fit-in/1000x0/4228514-2022-04-09T133540Z_635587071_UP1EI4911RE3T_RTRMADP_3_SOCCER-ENGLAND-EVE-MUN-REPORT.JPG'
    },
    {
        name: 'Cristiano Ronaldo',
        src: 'https://images.beinsports.com/W-Q_PY8sBnZEca2UGMeOg1OmEyo=/full-fit-in/1000x0/4228514-2022-04-09T133540Z_635587071_UP1EI4911RE3T_RTRMADP_3_SOCCER-ENGLAND-EVE-MUN-REPORT.JPG',
        profile: 'https://images.beinsports.com/W-Q_PY8sBnZEca2UGMeOg1OmEyo=/full-fit-in/1000x0/4228514-2022-04-09T133540Z_635587071_UP1EI4911RE3T_RTRMADP_3_SOCCER-ENGLAND-EVE-MUN-REPORT.JPG'
    },
    {
        name: 'Cristiano Ronaldo',
        src: 'https://images.beinsports.com/W-Q_PY8sBnZEca2UGMeOg1OmEyo=/full-fit-in/1000x0/4228514-2022-04-09T133540Z_635587071_UP1EI4911RE3T_RTRMADP_3_SOCCER-ENGLAND-EVE-MUN-REPORT.JPG',
        profile: 'https://images.beinsports.com/W-Q_PY8sBnZEca2UGMeOg1OmEyo=/full-fit-in/1000x0/4228514-2022-04-09T133540Z_635587071_UP1EI4911RE3T_RTRMADP_3_SOCCER-ENGLAND-EVE-MUN-REPORT.JPG'
    },
];
function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">

            {stories.map((story) =>
                <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
            )}
        </div>
    )
}

export default Stories