import Link from "next/link";
import {
  Search,
  Message,
  Calendar,
  ThumbsUp,
  Spaces,
  Electronics,
  Household,
  Musical,
  Gaming,
  Kitchen,
  Photography,
  Tools,
  Gardening,
  Events,
  Hobbies,
  Outdoor,
  Kids,
  Vehicle,
  Closet,
} from "./Images/Marketings/Marketings";

const teamMembers = [
  {
    id: 1,
    name: "Sarmuhabat Singh | Founder",
    shortBio: (
      <p>
        Social entrepreneur and business lecturer, Sarmuhabat Singh, believes
        that one's success and resources should be shared within the community
        to help support society as a whole. He’s currently looking to borrow a
        pair of hedge clippers to take care of a few jobs in the garden.
      </p>
    ),
    longBio: (
      <p>
        With roots descending from a long line of Punjab farmers, Sarmuhabat
        learnt the importance of cultivating land, growing vegetables, and doing
        things by hand from a young age. Although academia never came naturally
        to him, Sarmuhabat discovered his strength and purpose in business and
        entrepreneurship after moving to Australia as an international student.
        <br />
        <br />
        During his Executive MBA research project with RMIT Melbourne,
        Sarmuhabat uncovered the heartbreaking statistics of Australia's
        recycling crises. Research showed that developed countries are recycling
        less than 30% of plastic with only 56% of all packaging being recovered
        and recycled.
        <br />
        <br />
        There must be something he could do to help.
        <br />
        <br />
        While unpacking a new lawnmower, an idea came to mind. He thought, ‘If
        we all need to take care of our place, why should we all purchase
        several tools that spend most of their time sitting in the shed?’ “The
        a-ha moment for me came when I realised how many of my neighbours were
        doing the same thing. There are some tools you may only need once, and
        not everyone has the means to buy every tool. Many people, including
        myself, hesitate to ask their neighbours if we can share things and help
        each other out.”
        <br />
        <br />
        The solution to our waste crisis is not about bettering our recycling
        system but finding ways to move to zero waste. One way is to revitalise
        the power of sharing.
        <br />
        <br />
        And so Little Big Shed was born – an online platform to share tools,
        equipment, hobby gear and more between neighbours. A platform intended
        to eliminate barriers and enable people to connect, share, earn and
        thrive. Read more about our Little Big Shed evolution and global mission
        in our Founder’s Story blog.
        <br />
        <br />
        Sarmuhabat is currently pursuing his Doctorate in Business
        Administration from the University of Technology Sydney in collaboration
        with the Business Science Institute, Luxembourg and Lyon University,
        France. His research explores the most effective government policies
        required in Victoria to achieve the targeted 50% new car sales to be
        zero-emission vehicles by 2030.
        <br />
        <br />
        With dedication, courage and integrity, Sarmuhabat has proved his
        abilities in business, management, and leadership levels. His diverse
        business portfolio consists of retail, e-commerce, pre-delivery services
        for automotive retailers and a not-for-profit venture that produces and
        publishes audiobooks in the Punjabi language.
      </p>
    ),
  },
  {
    id: 2,
    name: "Kylie Bailey | Marketing Director",
    shortBio: (
      <p>
        Journalist and communications consultant Kylie Bailey believes in using
        words to create a better, more connected world. She’s currently looking
        to borrow a surfboard because she’s just started learning to surf and is
        saving up to buy one.
      </p>
    ),
    longBio: (
      <p>
        Kylie Bailey is Little Big Shed’s Marketing Director. A magazine
        journalist and senior editor with over 15 years experience in
        publishing, Kylie took a leap of faith and decided to only work with
        organisations who take care of people and the planet. That’s why she
        collaborates with GoodSense, who are Little Big Shed’s ethical marketing
        partners. She is grateful to be working on a platform that supports
        people to take small actions by sharing stuff and doing good.
      </p>
    ),
  },
  {
    id: 3,
    name: "Moumita Das Roy | Lending Marketing Skills for Little Big Shed",
    shortBio: (
      <p>
        Cross-industry marketer with local and international experience with B2B
        and B2C audiences, Moumita Das Roy brings her left-brain-right-brain
        balanced approach to work. Last season, she failed at snowboarding,
        that’s why she wants to try it again this year. She is looking to borrow
        good snow-gear before she invests on her own.
      </p>
    ),
    longBio: (
      <p>
        Moumita Das Roy is a Marketing Consultant with Little Big Shed. She
        brings more than 15 years experience working with iconic, global brands.
        She takes great interest in doing meaningful and contributory work for
        purpose-led brands and has multiple volunteering engagements with
        not-for-profit organisations in Aotearoa, New Zealand. That is why she
        is associated with GoodSense, who are Little Big Shed’s ethical
        marketing partners. She is completely aligned with the philosophy of
        proper utilisation of stuff and takes pride in repurposing and doing
        good.
      </p>
    ),
  },
  // {
  //   id: 4,
  //   name: 'Moumita Das Roy | Lending Marketing Skills for Little Big Shed',
  //   shortBio: (
  //     <p>
  //       Cross-industry marketer with local and international experience with B2B
  //       and B2C audiences, Moumita Das Roy brings her left-brain-right-brain
  //       balanced approach to work. Last season, she failed at snowboarding,
  //       that’s why she wants to try it again this year. She is looking to borrow
  //       good snow-gear before she invests on her own.
  //     </p>
  //   ),
  //   longBio: (
  //     <p>
  //       Moumita Das Roy is a Marketing Consultant with Little Big Shed. She
  //       brings more than 15 years experience working with iconic, global brands.
  //       She takes great interest in doing meaningful and contributory work for
  //       purpose-led brands and has multiple volunteering engagements with
  //       not-for-profit organisations in Aotearoa, New Zealand. That is why she
  //       is associated with GoodSense, who are Little Big Shed’s ethical
  //       marketing partners. She is completely aligned with the philosophy of
  //       proper utilisation of stuff and takes pride in repurposing and doing
  //       good.
  //     </p>
  //   ),
  // },
  // {
  //   id: 5,
  //   name: 'Moumita Das Roy | Lending Marketing Skills for Little Big Shed',
  //   shortBio: (
  //     <p>
  //       Cross-industry marketer with local and international experience with B2B
  //       and B2C audiences, Moumita Das Roy brings her left-brain-right-brain
  //       balanced approach to work. Last season, she failed at snowboarding,
  //       that’s why she wants to try it again this year. She is looking to borrow
  //       good snow-gear before she invests on her own.
  //     </p>
  //   ),
  //   longBio: (
  //     <p>
  //       Moumita Das Roy is a Marketing Consultant with Little Big Shed. She
  //       brings more than 15 years experience working with iconic, global brands.
  //       She takes great interest in doing meaningful and contributory work for
  //       purpose-led brands and has multiple volunteering engagements with
  //       not-for-profit organisations in Aotearoa, New Zealand. That is why she
  //       is associated with GoodSense, who are Little Big Shed’s ethical
  //       marketing partners. She is completely aligned with the philosophy of
  //       proper utilisation of stuff and takes pride in repurposing and doing
  //       good.
  //     </p>
  //   ),
  // },
];

const categories = [
  {
    id: 1,
    category: "DIY & Garden",
    categorySearchParam: "DIYGarden",
    itemCountName: "DIY & Garden",
    image: Tools,
  },
  {
    id: 2,
    category: "Parties & Events",
    categorySearchParam: "PartiesEvents",
    itemCountName: "Parties & Events",
    image: Events,
  },
  {
    id: 3,
    category: "Outdoor & Sport",
    categorySearchParam: "OutdoorSport",
    itemCountName: "Outdoor & Sport",
    image: Outdoor,
  },
  {
    id: 4,
    category: "Babies & Kids",
    categorySearchParam: "BabiesKids",
    itemCountName: "Babies & Kids",
    image: Kids,
  },
  {
    id: 5,
    category: "Vehicle",
    categorySearchParam: "Vehicle",
    itemCountName: "Vehicle",
    image: Vehicle,
  },
  {
    id: 6,
    category: "Closet",
    categorySearchParam: "Closet",
    itemCountName: "Closet",
    image: Closet,
  },
  {
    id: 7,
    category: "Spaces",
    categorySearchParam: "Spaces",
    itemCountName: "Spaces",
    image: Spaces,
  },
  {
    id: 8,
    category: "Electronics",
    categorySearchParam: "Electronics",
    itemCountName: "Electronics",
    image: Electronics,
  },
  {
    id: 9,
    category: "Household",
    categorySearchParam: "Household",
    itemCountName: "Household",
    image: Household,
  },
  {
    id: 10,
    category: "Musical",
    categorySearchParam: "Musical",
    itemCountName: "Musical",
    image: Musical,
  },
  {
    id: 11,
    category: "Gaming & Toys",
    categorySearchParam: "GamingToys",
    itemCountName: "Gaming & Toys",
    image: Gaming,
  },
  {
    id: 12,
    category: "Kitchen",
    categorySearchParam: "Kitchen",
    itemCountName: "Kitchen",
    image: Kitchen,
  },
  {
    id: 13,
    category: "Photography",
    categorySearchParam: "Photography",
    itemCountName: "Photography",
    image: Photography,
  },
  {
    id: 14,
    category: "Other",
    categorySearchParam: "Other",
    itemCountName: "Other",
    image: Hobbies,
  },
];

const FAQ_General_Data = [
  {
    id: 1,
    title: "Is it free to use the platform?",
    content: (
      <p>
        We believe in the power of sharing and want to make it as easy,
        accessible and beneficial as possible. That’s why Little Big Shed has no
        platform service fee. We cover the costs for the smooth sailing of our
        shed so that you can earn more when you do good sharing your stuff.{" "}
        <br />
        <br />
        As a lender, the only cost of using Little Big Shed is a 2.7% processing
        fee + 30c transaction fee for domestic cards and 3.7% processing fee +
        30c transaction fee for international cards, charged by Stripe, our
        third-party payment provider. This amount is deducted from what you get
        paid each time your item is rented out.
      </p>
    ),
  },
  {
    id: 2,
    title: "Where can I download the app?",
    content: (
      <p>
        The Little Big Shed app is free to download on both Android Play Store
        and the IOS App Store so you can borrow and lend on the go!
      </p>
    ),
  },
  {
    id: 3,
    title: "Can I cancel a share once booked?",
    content: (
      <p>
        Yes.
        <br />
        <br />
        As a lender, you can cancel a booked item at any time. We recommend you
        give the borrower at least 24 hours notice before cancelling the item.
        You will be charged a small payment processing fee. Check out our
        cancellations & refunds policy for the full details. <br />
        <br />
        As a borrower, you can cancel a booked item more than 24 hours before
        the share begins. You will forfeit the time slot that has been allocated
        to your borrow and be charged a small payment processing fee.
        <br />
        <br />
        As a borrower, if you cancel less than 24 hours before the item is due
        to be delivered by the Lender, you will lose 50% of your deposit. You
        will also only be refunded 80% of your initial borrow deposit to account
        for our handling fees.
      </p>
    ),
  },
  {
    id: 4,
    title: "How are users on the platform verified?",
    content: (
      <div>
        It’s important to us that you feel safe and secure while using Little
        Big Shed. That’s why we have a two-step verification process when
        signing up users. <br />
        <br />
        <ol>
          <li>
            To join the platform, a user must enter a valid email,
            receive a text and complete a two-factor authentication process. If
            the user is banned, they cannot use their email to
            create a new account.
          </li>
          <li>
            Additionally users are verified through our Stripe payment portal to
            ensure secure transactions. Stripe requires a valid credit card and
            a bank account.
          </li>
        </ol>
      </div>
    ),
  },
  {
    id: 5,
    title: "What happens if something goes wrong during the share?",
    content: (
      <p>
        We know that in life the unexpected can happen! If something goes wrong
        during your share such as the item stops working, breaks, is returned
        late, or not at all, we have processes in place to make sure you’re
        looked after. Check out our Damage and Disputes Process here.
      </p>
    ),
  },
  {
    id: 6,
    title: "How does COVID-19 impact lending and borrowing?",
    content: (
      <p>
        During the uncertain climate of Coid-19, we encourage you to take extra
        care when sharing your items with neighbours. Follow the government
        guidelines for{""}
        <a
          className="underline_link"
          href="https://covid19.govt.nz/traffic-lights/life-at-orange/"
        >
        life at orange
        </a>
        .<br />
        <br />
        Our platform also offers a ‘contactless sharing’ option which means you
        can choose to have an item delivered and/or picked up for an extra $10.
      </p>
    ),
  },
];

const FAQ_Lender_Data = [
  {
    id: 1,
    title: "How do I take a good photo?",
    content: (
      <div>
        <p>

        Having visual images on your listings will help users discover and learn
        more about the type of item you have on Little Big Shed. We recommend
        following the below criteria to create a successful listing:
        </p>
        <div>
        <ul>
          <li>Add at least four recent photos of your item to your listing</li>
          <li>
            at least one photo that shows the entire item (you can add
            additional closeup photos to show detail)
          </li>
          <li>
            Image files must be high quality (make sure they are not blurry and
            that detail can be seen)
          </li>
          <li>You can upload as many images as you like in any file format.</li>
        </ul>

        </div>
        <p>
        Tip - it’s good practice to take time-stamped photo/s of your item
        before each share as part of your{" "}
        <a className="underline_link" href="/lender_protection">
          lender protection
        </a>
        .
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "How much should I list my item for?",
    content: (
      <p>
        Here is a recommended price list that we’ve put together for some common
        items to help with listing your item.
        <br />
        <br />
        As a rough calculation, we recommend charging 20% of the price of the
        item when it is brand-new.
        <br />
        <br />
        There is an option to set a $0 lending fee. Note, items listed at $0 are
        not covered by the lender protection policy.
      </p>
    ),
  },
  {
    id: 3,
    title: "Can I lend for free?",
    content: <p>Yes. There is an option to set a $0 lending fee.</p>,
  },
  {
    id: 4,
    title: "How to make sure your item is safe for others to use?",
    content: (
      <div>
        <p>
        Keeping our users safe is top priority. Follow the below tips to lend
        safely:
        </p>
        <div>
        <ul>
          <li>
            Check your item before the booking date to ensure there is no damage
            that could affect its performance and safety
          </li>
          <li>
            We encourage you to add ‘how to use’ instructions to your listing
          </li>
          <li>
            When you meet the borrower in person make sure to discuss the item,
            show them any quirks, and answer any questions they may have
          </li>
          <li>
            You can also use our in-app chat function for ‘how to use’
            discussion
          </li>
        </ul>
        Lending electrical equipment?
        </div>
        <p>
        Although not mandatory, the New Zealand Standard recommends that
        electrical equipment needs to be inspected prior to being hired, as well
        as being tested and tagged every three months.
        </p>
        <p>
        If your item is electrical, we recommend you get an ‘Electrical Test and
        Tag’. Test and tagging is a generic name given to the process of
        visually inspecting and electrically testing in-service electrical
        equipment for personal safety.
        </p>
       <p>
        To find where you can get this done, check out Test and Tag NZ
       </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "What to do if my item is damaged or stolen?",
    content: (
      <p>
        In the unlikely situation that your item is damaged on return, or is not
        returned and the renter is not responding to your messages, follow our
        Damage and Disputes Process here.
        <br />
        <br />
        Rest assured that when you share your shed on our platform, we have your
        listed items covered against damage during the lending period if
        something goes wrong – up to NZ$2000 of cover per item. Read our full
        Lender Protection Policy
      </p>
    ),
  },
  {
    id: 6,
    title: "How to create a successful listing?",
    content: (
      <div>
        <ul>
          <li>heck out our blog on how to create a successful listing</li>
          <li>
            Accurately and clearly describe the item and the condition it is in
          </li>
          <li>
            Price your item competitively by checking out similar items to
            yours, both on our shed and other platforms, such as TradeMe.
          </li>
          <li>
            Ensure that all photographs truly and accurately depict the item:
            <ul>
              <li>
                Add at least four recent photos of your item to your listing
              </li>
              <li>
                Make sure to include at least one photo that shows the entire
                item (you can add additional closeup photos to show detail)
              </li>
              <li>
                Image files must be high quality (make sure they are not blurry
                and that detail can be seen)
              </li>
            </ul>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 7,
    title: "What can I list on Little Big Shed?",
    content: (
      <p>
        Anything you have in your ‘little shed’ (whether that’s a garage, a
        kitchen drawer or a cupboard shelf!) can be shared on our platform.
        <br />
        <br />
        As long as the item is not illegal you should be good to go! Listings
        will be monitored by our team and if deemed as inappropriate you will be
        notified and the listing will be deleted. If you are unsure about
        listing an item get in touch.
      </p>
    ),
  },
  {
    id: 8,
    title: "Is there a cost to lend on Little Big Shed?",
    content: (
      <p>
        As a lender, the only cost of using Little Big Shed is a 2.7% processing
        fee + 30c transaction fee for domestic cards and 3.7% processing fee +
        30c transaction fee for international cards, charged by Stripe, our
        third-party payment provider. This amount is deducted from what you get
        paid each time your item is rented out.
      </p>
    ),
  },
  {
    id: 9,
    title: "How does payment work?",
    content: (
      <p>
        Once you confirm the share is complete ( there is no dispute), and you
        have reviewed the borrower, you will be paid directly into the bank
        account you provided.
        <br />
        <br />
        Remember a 2.7% processing fee + 30c transaction fee for domestic cards
        and 3.7% processing fee + 30c transaction fee for international cards,
        charged by Stripe, our third-party payment provider.This amount is
        deducted from what you get paid each time your item is rented out.
      </p>
    ),
  },
  {
    id: 10,
    title: "What if I need to cancel an item a borrower has booked?",
    content: (
      <p>
        If you need to cancel a rental request make sure you contact the
        borrower via the in-app chat at least 24 hours before they are due to
        collect the item.
        <br />
        <br />
        Little Big Shed will add a small penalty fee to your account covering
        the third-party payment fees incurred by the borrower. All penalty fees
        will be deducted from your next payment in the next Lender Payment Run.
        <br />
        <br />
        Before cancelling a booked item remember that your borrower may be
        counting on having the item for that specific rental period.
      </p>
    ),
  },
];

const FAQ_Borrower_Data = [
  {
    id: 1,
    title: "Can I cancel a booked item or change the rental dates?",
    content: (
      <p>
        Yes, if done prior to 24 hours there is no payment, if within 24 hours,
        the borrower loses their 50% deposit. By cancelling a booked borrow you
        will forfeit the time slot that has been allocated to your borrow. You
        will also only be refunded 80% of your initial borrow deposit to account
        for our handling fees.
        <br />
        <br />
        To change the rental date, contact the lender via the in-app messenger
        to check first that the item is available for the new dates you desire
        and if so, cancel your current booking, rebook and you're good to go.
      </p>
    ),
  },
  {
    id: 2,
    title: "Item Faults Disputes and resolution",
    content: (
      <p>
        What happens if the item I borrow is damaged? What happens if it breaks
        while I’m using it? When you pick up the item, take a photo that’s time
        stamped so that as the borrower you’ve got a record of what’s happened.
        <br />
        <br />
        If you have an issue with the item, within 12 hours of pick up of the
        item, you need to first contact the lender through the app message
        feature. Then raise a dispute by contacting Little Big Shed’s customer
        service team at{" "}
        <a className="underline_link" href="mailto:support@littlebigshed.co.nz">
          support@littlebigshed.co.nz
        </a>
      </p>
    ),
  },
  {
    id: 3,
    title: "What if the item I want to rent isn’t on Little Big Shed?",
    content: (
      <p>
        As our little shed grows into something big, you’ll be able to share
        almost anything! But as we get the ball rolling and you can’t find what
        you’re looking for, feel free to make a request by sending us a message.
        We’ll send your request to our existing network of lenders to see if
        someone has the item and is keen to share it with you!
      </p>
    ),
  },
  {
    id: 4,
    title: "Can the rental period be extended?",
    content: (
      <p>
        That shouldn’t be a problem! You just need to contact the lender via our
        secure in-app messenger to see whether the item is available to be
        rented for longer. If the lender is okay with it, select the new dates,
        pay the extra amount, and continue your project.
      </p>
    ),
  },
  {
    id: 5,
    title: "What happens if I return the item late",
    content: (
      <p>
        Wherever possible, try to return your item on time. But we understand,
        life happens.
        <br />
        <br />
        If for whatever reason you have to return an item late, message the
        lender via the app to let them know before the end of your borrow
        period. You will be charged for each extra day it is in your possession.
      </p>
    ),
  },
  {
    id: 6,
    title: "When am I charged?",
    content: (
      <p>
        Once you have returned the item at the agreed time and the lender has
        confirmed the share is complete (and there is no dispute), the borrow
        fee will be automatically deducted from the bank account you provided.
      </p>
    ),
  },
  {
    id: 7,
    title:
      "Am I liable for anything that happens to the item while borrowing it?",
    content: (
      <p>
        If you wilfully damage or steal the item while it is in your possession,
        you will be liable for its replacement value. If the item is worth less
        than $2,000 and you accidentally damage it while it is in your
        possession, Little Big Shed’s lender protection policy will cover the
        damage up to the full replacement value of the item.
      </p>
    ),
  },
];

const howItWorksProcedures = [
  {
    id: 1,
    icon: Search,
    title: "Explore and Find",
    description:
      "Search our little big platform to be matched with neighbours nearby who want to share that item.",
  },
  {
    id: 2,
    icon: Calendar,
    title: "Book and Pay",
    description:
      "Select a time to borrow the item – it's good for you because you save some money, and it's good for them because they make some money. Plus, everyone’s money stays local. That means it circulates around your neighbourhood, rather than being spent at the global big box retailers, who take your money offshore.",
  },
  {
    id: 3,
    icon: Message,
    title: "Collect and Enjoy",
    description:
      "Connect with locals like you and use your borrowed item to learn, make or mend. ",
  },
  {
    id: 4,
    icon: ThumbsUp,
    title: "Return and Rate",
    description:
      "Review your experience and build connections and trust within your neighbourhood.",
  },
];
export {
  categories,
  teamMembers,
  FAQ_General_Data,
  FAQ_Lender_Data,
  FAQ_Borrower_Data,
  howItWorksProcedures,
};
