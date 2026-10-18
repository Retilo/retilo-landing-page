import type { ReactNode } from "react"

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  category: string
  categoryColor: string
  content: ReactNode
}

export const blogPosts: BlogPost[] = [
  {
    slug: "get-more-google-reviews-restaurant-india",
    title: "How to Get More Google Reviews for Your Restaurant in India",
    description:
      "Google reviews are the #1 factor customers check before choosing a restaurant. Here's a practical, no-fluff guide to consistently getting more 5-star reviews — without begging or paying for them.",
    date: "2025-09-10",
    readTime: "7 min read",
    category: "Reputation",
    categoryColor: "bg-yellow-500/10 text-yellow-700",
    content: (
      <>
        <p>
          A customer in Hyderabad is deciding where to eat tonight. They open
          Google Maps, search &quot;best biryani near me,&quot; and scan the
          first four results. The one with 4.6★ and 400+ reviews wins. Yours
          has 3.9★ and 22 reviews — and you never find out why they walked past.
        </p>
        <p>
          Google reviews are now the single most influential signal for local
          restaurant discovery. More reviews, higher average rating = more
          walk-ins, more delivery orders, less spending on paid ads. This guide
          will show you how to build a reliable review engine for your
          restaurant.
        </p>

        <h2>Why Most Restaurants Struggle to Get Reviews</h2>
        <p>
          Unhappy customers leave reviews automatically. Happy customers
          intend to leave one, get distracted, and forget. That asymmetry
          explains why the average local restaurant has a rating lower than its
          actual quality. The fix isn&apos;t asking harder — it&apos;s removing
          friction at the exact right moment.
        </p>

        <h2>1. Ask Within 10 Minutes of a Positive Experience</h2>
        <p>
          Timing matters more than the ask itself. The best window is right
          after the meal when the customer is still at the table — or within 10
          minutes of a delivery hitting their door. The feeling fades fast.
        </p>
        <p>
          Train your staff to read the table. When a customer says &quot;This
          was amazing,&quot; the response should be: &quot;We&apos;re so glad —
          if you have 30 seconds, a Google review would mean a lot to us.&quot;
          Then hand them a QR card that opens your review link directly.
        </p>

        <h2>2. Make It a One-Tap Action</h2>
        <p>
          Every additional step kills conversions. Create a short link (e.g.
          g.page/yourrestaurant) that opens your Google review form directly —
          not your Maps listing. Place this link as:
        </p>
        <ul>
          <li>A QR code on your bill/receipt</li>
          <li>A table tent card</li>
          <li>A WhatsApp message sent 20 minutes after a booking checkout</li>
          <li>A follow-up SMS after delivery</li>
        </ul>

        <h2>3. Use WhatsApp — Your Customers Are Already There</h2>
        <p>
          India has 500M+ WhatsApp users. A well-timed review request via
          WhatsApp outperforms email 10-to-1. The message should be warm, brief,
          and personal:
        </p>
        <p>
          <em>
            &quot;Hi [Name], thanks for dining with us at [Restaurant] tonight!
            We hope you enjoyed the [dish]. If you&apos;ve got a moment, your
            review on Google helps us a lot: [link]. Thank you! 🙏&quot;
          </em>
        </p>
        <p>
          The key is personalization and timing. Mass blast messages get
          ignored. A message that references their actual visit and arrives 30
          minutes after they leave feels natural.
        </p>

        <h2>4. Respond to Every Review — Including the Good Ones</h2>
        <p>
          Google&apos;s algorithm treats response rate as a quality signal.
          Restaurants that respond to reviews rank higher than those that
          don&apos;t. More importantly, future customers read your responses —
          they reveal your personality and how you treat people.
        </p>
        <p>
          A simple rule: respond to every review within 48 hours. For positive
          reviews, thank them specifically and mention something from their
          review. For negative ones, acknowledge the issue, apologize, and
          invite them back privately.
        </p>

        <h2>5. Don&apos;t Pay for Reviews — Ever</h2>
        <p>
          Paid reviews violate Google&apos;s policies and are increasingly
          detectable. A sudden spike in 5-star reviews from accounts with no
          history triggers suppression. More importantly, fake reviews don&apos;t
          build the real reputation flywheel — genuine reviews generate genuine
          trust.
        </p>

        <h2>6. Build a System, Not a One-Off Campaign</h2>
        <p>
          The restaurants winning on Google aren&apos;t running review drives
          once a quarter. They have an automated system: every booking or order
          triggers a review request at the right time, every review gets a
          response, and the owner sees a weekly summary. At scale, this
          compounds fast — 5 new reviews a week is 260 reviews a year.
        </p>

        <h2>The Numbers to Target</h2>
        <ul>
          <li>
            <strong>Rating:</strong> Aim for 4.4★ minimum. 4.6★+ puts you in
            the top tier for most searches.
          </li>
          <li>
            <strong>Volume:</strong> 100+ reviews signals credibility to first-time
            visitors.
          </li>
          <li>
            <strong>Velocity:</strong> Fresh reviews (last 30 days) are weighted
            more than old ones.
          </li>
          <li>
            <strong>Response rate:</strong> Try to respond to 100% of reviews.
          </li>
        </ul>

        <h2>The Fastest Way to Implement This</h2>
        <p>
          If you want to do this manually, start with the QR card on your bill
          and a WhatsApp follow-up to every dine-in booking. That alone will
          double your review volume within 60 days for most restaurants.
        </p>
        <p>
          If you want it automated — where every WhatsApp review request goes
          out at the perfect time, every response gets drafted by AI, and you
          see your reputation score in one dashboard — that&apos;s exactly what
          Retilo is built for.
        </p>
      </>
    ),
  },
  {
    slug: "restaurant-not-showing-google-maps-fix",
    title:
      "Why Your Restaurant Isn't Showing Up on Google Maps (And How to Fix It)",
    description:
      "If your restaurant doesn't appear in the top 3 Google Maps results for nearby searches, you're invisible to most of your potential customers. Here's exactly why it happens and how to fix it.",
    date: "2025-09-22",
    readTime: "6 min read",
    category: "Local SEO",
    categoryColor: "bg-blue-500/10 text-blue-700",
    content: (
      <>
        <p>
          Roughly 76% of people who search for something nearby on their phone
          visit a business within 24 hours. The catch: Google shows only 3
          businesses in the &quot;local pack&quot; — the map results that appear
          above all other links. If you&apos;re not in those 3, you&apos;re
          essentially invisible for that search.
        </p>
        <p>
          The good news: most restaurants are invisible not because of
          competition, but because of fixable technical gaps. This guide covers
          the most common reasons and the exact steps to fix them.
        </p>

        <h2>Reason 1: Your Google Business Profile Is Incomplete</h2>
        <p>
          Google rewards completeness. A profile missing photos, business
          hours, category, menu, or attributes ranks lower — even if your food
          is better than the competition.
        </p>
        <p>
          <strong>Fix:</strong> Log into your Google Business Profile
          (business.google.com) and complete every section:
        </p>
        <ul>
          <li>Primary category (e.g. &quot;Indian Restaurant&quot;) + 2–3 secondary categories</li>
          <li>Accurate business hours including holidays</li>
          <li>At least 10 photos (interior, food, team)</li>
          <li>Menu items with prices</li>
          <li>Services offered (dine-in, takeaway, delivery)</li>
          <li>Phone number and website URL</li>
        </ul>

        <h2>Reason 2: You Have Too Few Reviews (or Too Many Old Ones)</h2>
        <p>
          Google&apos;s local ranking algorithm treats reviews as a trust
          signal — both quantity and recency matter. A restaurant with 200
          reviews from 3 years ago and nothing recent can rank below a
          competitor with 40 reviews that are all from the last 6 months.
        </p>
        <p>
          <strong>Fix:</strong> Start a consistent review-generation process
          (see our guide on{" "}
          <a href="/blog/get-more-google-reviews-restaurant-india">
            how to get more Google reviews
          </a>
          ). Even 3–5 new reviews per week will significantly improve your
          visibility within 60 days.
        </p>

        <h2>Reason 3: Your NAP Is Inconsistent</h2>
        <p>
          NAP stands for Name, Address, Phone number. Google cross-references
          your business information across the entire web — Justdial, Zomato,
          Swiggy, IndiaMART, your website, and more. If your address appears
          differently across these sources (&quot;Rd&quot; vs &quot;Road&quot;,
          old phone number, different business name), Google loses confidence in
          your listing and ranks you lower.
        </p>
        <p>
          <strong>Fix:</strong> Search your business name + city across Google.
          Find every listing and make them all match exactly — same name, same
          address format, same phone number.
        </p>

        <h2>Reason 4: You Haven&apos;t Verified Your Listing</h2>
        <p>
          Unverified Google Business listings are severely limited in ranking
          ability. Many businesses don&apos;t know their listing was
          auto-created by Google and hasn&apos;t been verified by the owner.
        </p>
        <p>
          <strong>Fix:</strong> Go to business.google.com, claim your listing if
          you haven&apos;t already, and complete the verification process (by
          phone, email, or video call). Verification typically unlocks full
          ranking potential within 1–2 weeks.
        </p>

        <h2>Reason 5: You&apos;re Not Posting Updates</h2>
        <p>
          Google Posts are short updates — specials, events, offers — that
          appear on your Business Profile. Many restaurants don&apos;t use them.
          Regular posting signals to Google that your business is active, which
          correlates with higher local rankings.
        </p>
        <p>
          <strong>Fix:</strong> Post at least once a week. Announce your weekend
          special, a new dish, a seasonal menu, or an event. Keep it under 100
          words with a clear photo.
        </p>

        <h2>Reason 6: Your Website Has No Local Keywords</h2>
        <p>
          If you have a website, Google looks at it to understand what your
          business does and where. A website that just says &quot;Welcome to
          our restaurant&quot; with no location or cuisine mentioned sends weak
          signals.
        </p>
        <p>
          <strong>Fix:</strong> Make sure your website&apos;s title tag and
          homepage content include your city, neighborhood, and cuisine type.
          Example: &quot;Authentic Hyderabadi Biryani — [Restaurant Name] in
          Banjara Hills, Hyderabad.&quot;
        </p>

        <h2>How Long Does It Take?</h2>
        <p>
          With all fixes applied, most restaurants see meaningful improvement in
          local rankings within 4–8 weeks. Reviews have the fastest impact —
          especially if you&apos;re in a competitive area. Profile completeness
          and NAP consistency are one-time fixes that compound over time.
        </p>
        <p>
          Retilo&apos;s reputation module keeps your review velocity high
          automatically, posts regular updates to your GMB, and tracks your
          ranking over time — so you can focus on the kitchen while the
          algorithm does the work.
        </p>
      </>
    ),
  },
  {
    slug: "how-to-reply-negative-restaurant-reviews",
    title: "How to Reply to Negative Restaurant Reviews (With Real Examples)",
    description:
      "A bad review isn't the end — it's an opportunity. The way you respond tells future customers more about your restaurant than the complaint itself. Here's how to do it right.",
    date: "2025-10-01",
    readTime: "8 min read",
    category: "Reputation",
    categoryColor: "bg-yellow-500/10 text-yellow-700",
    content: (
      <>
        <p>
          Here&apos;s the uncomfortable truth: everyone who reads a negative
          review also reads your response. The complaint is about the past.
          Your response is about who you are right now. Done well, a response
          to a 1-star review can actually convert fence-sitters into loyal
          customers.
        </p>
        <p>
          This guide walks through the exact framework for responding to
          negative reviews on Google, Zomato, and Swiggy — with real examples
          you can adapt.
        </p>

        <h2>The 5-Part Response Framework</h2>
        <p>Every good negative review response has five elements:</p>
        <ul>
          <li>
            <strong>Acknowledge</strong> — thank them for the feedback, not for
            the complaint
          </li>
          <li>
            <strong>Apologize</strong> — genuinely, without defensive language
          </li>
          <li>
            <strong>Take ownership</strong> — never blame the customer, the
            weather, or &quot;that day&quot;
          </li>
          <li>
            <strong>Offer a resolution</strong> — invite them back or provide
            contact details
          </li>
          <li>
            <strong>Keep it short</strong> — 4–6 sentences max
          </li>
        </ul>

        <h2>Example 1: Slow Service Complaint</h2>
        <p>
          <strong>Review:</strong> &quot;Waited 45 minutes for food on a
          weekday. Tables weren&apos;t even full. Really disappointed.&quot;
        </p>
        <p>
          <strong>Bad response:</strong> &quot;Sorry for the inconvenience. We
          were understaffed that day.&quot;
        </p>
        <p>
          <strong>Good response:</strong> &quot;Thank you for letting us know —
          a 45-minute wait on a quiet day is genuinely unacceptable, and
          I&apos;m sorry we put you through that. We&apos;ve looked into it and
          made changes to our kitchen coordination. We&apos;d love the chance to
          make it right — please drop us a message on WhatsApp at [number] and
          we&apos;ll take care of you on your next visit.&quot;
        </p>

        <h2>Example 2: Food Quality Complaint</h2>
        <p>
          <strong>Review:</strong> &quot;The dal makhani was watery and tasted
          like it had been sitting for hours. Not fresh at all. Won&apos;t be
          coming back.&quot;
        </p>
        <p>
          <strong>Bad response:</strong> &quot;We use fresh ingredients every
          day. This doesn&apos;t sound like our kitchen.&quot;
        </p>
        <p>
          <strong>Good response:</strong> &quot;That&apos;s not the experience
          we want for anyone, and I&apos;m sorry the dal makhani let you down.
          Quality control is something I personally monitor, and this feedback
          goes straight to our kitchen team. I&apos;d really appreciate a chance
          to change your mind — please reach out to me directly at
          [email/number] so I can make it right.&quot;
        </p>

        <h2>Example 3: Rude Staff Complaint</h2>
        <p>
          <strong>Review:</strong> &quot;The waiter was dismissive and
          practically threw the bill at us. Terrible attitude.&quot;
        </p>
        <p>
          <strong>Good response:</strong> &quot;I&apos;m really sorry — that
          kind of behavior has no place here, and you deserved much better.
          I&apos;ve spoken to the team directly about this. If you&apos;re open
          to giving us another try, please reach me at [contact] and I&apos;ll
          personally ensure your next visit is everything it should have been
          the first time.&quot;
        </p>

        <h2>What Not to Do</h2>
        <ul>
          <li>
            <strong>Don&apos;t argue</strong> — even if the review is factually
            wrong, arguing publicly makes you look worse
          </li>
          <li>
            <strong>Don&apos;t use templates</strong> — &quot;Thank you for
            your valuable feedback&quot; is spotted from a mile away and signals
            you don&apos;t care
          </li>
          <li>
            <strong>Don&apos;t over-promise</strong> — saying &quot;We&apos;ve
            fixed this!&quot; only invites follow-up visits that might disprove
            you
          </li>
          <li>
            <strong>Don&apos;t be defensive</strong> — &quot;We were very busy
            that night&quot; is an excuse, not an apology
          </li>
        </ul>

        <h2>How to Handle Fake or Competitor Reviews</h2>
        <p>
          If a review is clearly fake (no order history, generic complaint, no
          specific details), respond professionally first — then flag it for
          removal in Google&apos;s policy manager. Don&apos;t call it fake in
          your public response — that comes across as defensive even when
          you&apos;re right.
        </p>
        <p>
          For competitors leaving reviews, document them, report them to
          Google, and respond as if it were a genuine complaint. The high road
          is always the right public image.
        </p>

        <h2>The Volume Problem</h2>
        <p>
          For restaurants getting 20+ reviews a week, responding to every one
          manually becomes a full-time job. That&apos;s where AI-assisted
          responses come in — Retilo can generate a draft response to every
          new review within minutes, in your tone, which you can approve with
          one tap. No copy-paste templates. Every response sounds like it came
          from the owner.
        </p>
      </>
    ),
  },
  {
    slug: "whatsapp-marketing-restaurants-india",
    title:
      "WhatsApp Marketing for Restaurants: Get Repeat Customers Without Paid Ads",
    description:
      "Your customers are already on WhatsApp. Here's how Indian restaurants are using it to fill tables on slow nights, re-engage lapsed customers, and build a loyal base — without spending on ads.",
    date: "2025-10-08",
    readTime: "7 min read",
    category: "Marketing",
    categoryColor: "bg-green-500/10 text-green-700",
    content: (
      <>
        <p>
          Instagram ads cost ₹15–40 per click. Most of those clicks don&apos;t
          convert. WhatsApp messages to your existing customers cost almost
          nothing and convert at 5–10x the rate — because the person already
          knows you and trusts you.
        </p>
        <p>
          The mistake most restaurant owners make is treating WhatsApp as just
          a customer service channel. The restaurants growing fastest in India
          are using it as their primary marketing engine.
        </p>

        <h2>Why WhatsApp Outperforms Every Other Channel for Restaurants</h2>
        <ul>
          <li>
            <strong>Open rates:</strong> WhatsApp messages get opened at
            85–95%. Email is 20%. Instagram feed posts reach 5% of your
            followers.
          </li>
          <li>
            <strong>Contextual:</strong> A message feels personal, not like an
            ad. &quot;We saved your favourite table for Sunday&quot; lands very
            differently than a Facebook post.
          </li>
          <li>
            <strong>Instant:</strong> A Sunday afternoon message about a
            Monday lunch special can drive walk-ins the next day.
          </li>
          <li>
            <strong>Two-way:</strong> Customers can reply, ask questions, and
            book — all in the same chat.
          </li>
        </ul>

        <h2>Building Your WhatsApp Customer List (The Right Way)</h2>
        <p>
          Before you can market on WhatsApp, you need a list. The best ways to
          build it:
        </p>
        <ul>
          <li>
            Collect numbers at the time of booking or order (ask at the
            counter, or capture via your booking form)
          </li>
          <li>
            Add a &quot;Get offers on WhatsApp&quot; option on your website or
            QR menu
          </li>
          <li>
            Run a one-time &quot;Save 10% on your next visit&quot; campaign on
            Instagram with a WhatsApp opt-in
          </li>
        </ul>
        <p>
          Critically: only message people who have opted in. Sending unsolicited
          messages gets you blocked and flagged, which damages your WhatsApp
          Business reputation score.
        </p>

        <h2>5 Message Types That Drive Revenue</h2>

        <h3>1. The Slow Day Filler</h3>
        <p>
          Send on a Tuesday or Wednesday morning targeting your recent
          customers:
        </p>
        <p>
          <em>
            &quot;Hey [Name], slow week means our kitchen has more time to
            perfect your order. Today only: 20% off on [dish]. Book via this
            link: [link] — valid till 8pm.&quot;
          </em>
        </p>

        <h3>2. The Win-Back</h3>
        <p>
          For customers who haven&apos;t visited in 45+ days:
        </p>
        <p>
          <em>
            &quot;Hi [Name], it&apos;s been a while! We&apos;ve added a new
            [dish] to the menu that we think you&apos;d love. Come back this
            week and we&apos;ll throw in a free [dessert/drink]. Reply to
            book.&quot;
          </em>
        </p>

        <h3>3. The Weekend Tease</h3>
        <p>Send Thursday evening to build anticipation:</p>
        <p>
          <em>
            &quot;This weekend: live ghazal night + a new seasonal menu. Tables
            are filling up — save yours: [booking link].&quot;
          </em>
        </p>

        <h3>4. The Post-Visit Follow-Up</h3>
        <p>Sent 30–60 minutes after a dine-in visit ends:</p>
        <p>
          <em>
            &quot;Thanks for dining with us today, [Name]! We hope you loved
            the [dish]. A quick review on Google means the world to us:
            [review link]. See you again soon! 🙏&quot;
          </em>
        </p>

        <h3>5. The Festive Campaign</h3>
        <p>India has more food occasions than any country on earth. Plan
          campaigns around Diwali, Eid, Dussehra, Onam, Pongal, Christmas,
          and local festivals:</p>
        <p>
          <em>
            &quot;Eid Mubarak from all of us at [Restaurant]! Celebrate with
            our special Eid thali this week — book for 4 or more and get a
            complimentary seviyan. Reserve now: [link].&quot;
          </em>
        </p>

        <h2>The Rules of WhatsApp Marketing</h2>
        <ul>
          <li>
            <strong>Send at the right time:</strong> Lunch promotions at 11am.
            Dinner promotions at 5pm. Never before 9am or after 9pm.
          </li>
          <li>
            <strong>Keep it short:</strong> 3–4 lines max. If it needs more
            explanation, it&apos;s not a good offer.
          </li>
          <li>
            <strong>One clear CTA:</strong> One link or one action per message.
            &quot;Reply YES&quot; or &quot;Book here.&quot;
          </li>
          <li>
            <strong>Don&apos;t blast daily:</strong> Twice a week is the
            maximum for most audiences. More than that and people opt out.
          </li>
        </ul>

        <h2>Scaling This Without Spending Hours on It</h2>
        <p>
          Done manually, WhatsApp marketing takes significant time — building
          lists, drafting messages, scheduling sends, tracking responses.
          Retilo&apos;s WhatsApp inbox automates the routine: review requests
          go out after every visit, win-back messages trigger after 45 days of
          inactivity, and you can broadcast campaigns to segmented customer
          lists in minutes. The conversations come back into one unified inbox,
          so nothing slips through.
        </p>
      </>
    ),
  },
  {
    slug: "ai-phone-receptionist-for-restaurants-india",
    title:
      "Why Indian Restaurants Are Switching to AI Phone Receptionists in 2025",
    description:
      "Missed calls are missed revenue. The average Indian restaurant misses 30–40% of incoming calls during peak hours. Here's how AI receptionists are solving it — and why they're especially useful for Hindi-speaking markets.",
    date: "2025-10-15",
    readTime: "6 min read",
    category: "Operations",
    categoryColor: "bg-purple-500/10 text-purple-700",
    content: (
      <>
        <p>
          Your phone rings at 7:45pm on a Saturday. You&apos;re in the kitchen.
          Your manager is handling a table complaint. The call rings out. That
          customer doesn&apos;t call back — they book somewhere else. It
          happened three more times before you even noticed.
        </p>
        <p>
          This isn&apos;t an edge case. For most Indian restaurants,
          30–40% of all incoming calls during peak hours go unanswered.
          Multiply that by the average order value and your missed revenue per
          week is significant — often ₹20,000–₹50,000 for a mid-sized
          restaurant.
        </p>

        <h2>What an AI Phone Receptionist Actually Does</h2>
        <p>
          An AI receptionist answers every call your team can&apos;t. It
          handles the most common call types automatically:
        </p>
        <ul>
          <li>
            <strong>Table reservations:</strong> Checks availability, takes the
            booking, sends a confirmation
          </li>
          <li>
            <strong>Menu inquiries:</strong> Answers questions about dishes,
            ingredients, pricing
          </li>
          <li>
            <strong>Business hours and location:</strong> Never miss a
            &quot;are you open?&quot; call again
          </li>
          <li>
            <strong>Order status:</strong> For restaurants with delivery,
            provides order updates
          </li>
          <li>
            <strong>Escalation:</strong> When a call needs a human, it
            immediately connects or takes a message
          </li>
        </ul>
        <p>
          Modern AI receptionists speak naturally — not the robotic IVR systems
          of the 2000s. The conversation feels like talking to a well-trained
          staff member.
        </p>

        <h2>The India-Specific Advantage: Hindi + English</h2>
        <p>
          A major gap in most AI voice products built for restaurants is
          language. In India, a large percentage of your customers prefer to
          call in Hindi — especially in Tier 1 and Tier 2 cities outside
          Bengaluru and Mumbai.
        </p>
        <p>
          An AI receptionist that can switch between Hindi and English
          mid-conversation dramatically reduces the friction of the call, and
          more importantly, makes customers feel heard. &quot;Kya aaj table
          milega?&quot; followed by an English confirmation is a completely
          natural interaction that generic tools can&apos;t handle.
        </p>

        <h2>Real Numbers: What Restaurants Report After Switching</h2>
        <ul>
          <li>
            Missed call rate drops from ~35% to under 5% during peak hours
          </li>
          <li>
            Booking conversions improve because the AI never gets distracted or
            forgets to ask for the name
          </li>
          <li>
            Staff mental load decreases — the team focuses on guests present,
            not ringing phones
          </li>
          <li>
            Owners can see a full call log: who called, what was asked, what
            was booked — all in one dashboard
          </li>
        </ul>

        <h2>Common Concerns — Addressed</h2>

        <h3>&quot;Will customers find it weird to talk to an AI?&quot;</h3>
        <p>
          Modern conversational AI is remarkably natural. Most callers
          don&apos;t notice or don&apos;t care as long as their question is
          answered and their booking is confirmed. The bar isn&apos;t
          &quot;be indistinguishable from a human&quot; — it&apos;s &quot;be
          more helpful than an unanswered phone.&quot;
        </p>

        <h3>&quot;What if it gets something wrong?&quot;</h3>
        <p>
          Any booking the AI takes should sync automatically to your booking
          system so you can review it. The AI also knows when to escalate —
          for complex complaints or special requests, it transfers to a human
          or takes a detailed message.
        </p>

        <h3>&quot;Is it expensive?&quot;</h3>
        <p>
          Compare it to the cost of a missed booking on a Saturday night.
          For most restaurants, recovering even 2–3 missed calls per week
          pays for the entire system.
        </p>

        <h2>The Bigger Picture: Your Phone as a Revenue Channel</h2>
        <p>
          Restaurants that treat their phone as a passive tool leave money on
          the table every week. An AI receptionist transforms it into a
          24/7 booking agent that never sleeps, never gets overwhelmed, and
          logs everything.
        </p>
        <p>
          Retilo&apos;s AI receptionist handles calls in Hindi and English,
          syncs all bookings to your dashboard, and sends automatic WhatsApp
          confirmations to customers — so your restaurant is always open to
          new business, even when you&apos;re in the middle of service.
        </p>
      </>
    ),
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
