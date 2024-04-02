"use client"
import { useState } from "react";
import Link from "next/link";

const MemberCard = ({ member, keyId }: any) => {
  const [bioStatus, setBioStatus] = useState({
    isReadMoreOpen: false,
    selectedBio: 0,
  });

  const readMore = () => {
    setBioStatus({
      isReadMoreOpen: true,
      selectedBio: keyId,
    });
  };

  return (
    <div className="our-team-card ">
      <h3>{member.name}</h3>
      <div>{member.shortBio}</div>
      {bioStatus.isReadMoreOpen && bioStatus.selectedBio === keyId && (
        <>{member.longBio}</>
      )}
      <>
        {!bioStatus.isReadMoreOpen && (
          <button className="readmore-btn" onClick={() => readMore()}>Read more</button>
        )}
      </>
    </div>
  );
};

export default MemberCard;
