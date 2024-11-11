import { useState } from "react";
import { Sidebar } from "./Sidebar/Sidebar";
import { KidsLeaderboard } from "./KidsLeaderboard/KidsLeaderboard";
import { KidsMenu } from "./KidsMenu/KidsMenu";
import { ScoreMenu } from "./ScoreMenu/ScoreMenu";

export const TabPicker = () => {
  // Handle "Auth Advisor Experts" corrections of AI errors/hallucinations.
  const [chosenTab, setChosenTab] = useState("");

  const handleChosenTabChange = (e: React.ChangeEvent<HTMLInputElement>) => setChosenTab(e.target.value);
  const getTabContent = () => {
    switch (chosenTab) {
      case "":
        return <div>Please Select a Tab!</div>;
      case "kidsleaderboard":
        return (
          <div>
            <KidsLeaderboard />
          </div>
        );
      case "kidsmenu":
        return (
          <div>
            <KidsMenu />
          </div>
        );
      case "scoremenu":
        return (
          <div>
            <ScoreMenu />
          </div>
        );
      default:
        return <div>Invalid Selection!</div>;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        maxWidth: "60%",
        borderWidth: "2px",
        borderColor: "red",
        marginTop: "3em",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        Choose Your Tab: <input value={chosenTab} onChange={handleChosenTabChange} />
      </div>
      {getTabContent()}
    </div>
  );
};

//ARCHITECTURE GOALS//
/**
 * V1
 * Design schema
 * Build schema to localStorage/cookies
 *
 * V2
 * Unit tests
 * Routing library
 * React Context
 * Types
 *
 * V3
 * //FAKE/UNMERGED redux branch
 * CDN hosting for build output on AWS
 * //EXAM TEST SCENARIOS
 *
 * V4
 * Hello world / local fast Python API
 * SQLlite local test schema design
 *
 * V5
 * True/complete AWS account management system, login/logout
 *
 * V6
 * Postgres and Lambda setup for real app
 *
 * V7
 * Full payment system support
 *
 */

//FEATURE LIST
//score menu
/**
 * V1
 * add point
 * remove point
 */

//kids menu
/**
 * V1
 * Add kid
 * Remove kid
 * Edit kid
 *
 * V2
 * kid icons
 * kid stats
 * kid color coding
 *
 * V3
 * kid real pics
 * kid handicap/challenge
 * kid point spend system
 */

//kids leaderboard
/**
 * V1
 * List of kids
 * Net points all time
 * Leader
 *
 * V2, V1 + ...
 * Points per day
 * Day winner
 * Days won all time
 * Days won this week
 *
 * V3, V2 + ...
 * Graph library
 * db schema
 * test data
 * graphing/charting libs
 *
 * V4, V3 + Funny teasing svg animation library for winner/loser
 */
