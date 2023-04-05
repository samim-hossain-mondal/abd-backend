const { dashboardPrisma: prisma } = require('../../src/prismaClient.js');
const madeToStickTemplate = require('../../src/mocks/madeToStickTemplate.js');


// PO Notes
let initialNoteId = 100;
const agendaItems = [
  {
    noteId: (initialNoteId++),
    projectId: 100,
    memberId: 100,
    note: 'Where should we deploy our app ?',
  },
  {
    noteId: (initialNoteId++),
    projectId: 100,
    memberId: 100,
    note: 'What should be the design of our app ?',
    createdAt: new Date('2023-03-29'),
  },
  {
    noteId: (initialNoteId++),
    projectId: 100,
    memberId: 100,
    note: 'What should be the architecture of our app ?',
    createdAt: new Date('2023-03-28'),
  }
];
agendaItems.forEach(item => item.type = 'AGENDA_ITEM');

const actionItems = [
  {
    noteId: (initialNoteId++),
    projectId: 100,
    memberId: 100,
    note: 'Get approval for current design',
  },
  {
    noteId: (initialNoteId++),
    projectId: 100,
    memberId: 100,
    note: 'Get approval for current architecture',
    status: 'COMPLETED'
  },
  {
    noteId: (initialNoteId++),
    projectId: 100,
    memberId: 100,
    note: 'Do a code review',
    status: 'DRAFT'
  }
];
actionItems.forEach(item => item.type = 'ACTION_ITEM');

const keyDecisions = [
  {
    noteId: (initialNoteId++),
    projectId: 100,
    memberId: 100,
    note: 'We should use stripe as payment gateway for our app',
  }
];
keyDecisions.forEach(item => item.type = 'KEY_DECISION');

const notes = [
  ...actionItems,
  ...agendaItems,
  ...keyDecisions,
];


// announcements
let initialAnnouncementId = 100;
const announcements = [
  {
    announcementId: (initialAnnouncementId++),
    projectId: 100,
    memberId: 100,
    title: 'Feedback Survey',
    content: 'Fill the feedback survey by today',
    createdAt: new Date('2023-03-28'),
    author: 'Ritik Rajdev'
  },
  {
    announcementId: (initialAnnouncementId++),
    projectId: 100,
    memberId: 100,
    title: 'Jira Board Access',
    content: 'Please request access to our client Jira board by this week if you do not have yet.',
    createdAt: new Date('2023-03-29'),
    author: 'Ritik Rajdev'
  },
  {
    announcementId: (initialAnnouncementId++),
    projectId: 100,
    memberId: 100,
    title: 'Team Meeting',
    content: 'Team Meeting @ 10:00pm today.',
    author: 'Ritik Rajdev'
  }
];


// requests
let initialRequestId = 100;
const requests = [
  {
    requestId: (initialRequestId++),
    projectId: 100,
    memberId: 102,
    content: 'Can we get access to aws for deployment ?',
    status: 'PENDING',
    author: 'Bharath Raj',
    type: 'RESOURCE'
  },
  {
    requestId: (initialRequestId++),
    projectId: 100,
    memberId: 102,
    content: 'Can I have a call with marketing team to know more about the promotional page.',
    status: 'APPROVED',
    author: 'Abhishek Kharpal',
    type: 'MEETING'
  },
];


// sentiments
let initialSentimentId = 100;
const sentiments = [
  {
    sentimentId: (initialSentimentId++),
    projectId: 100,
    memberId: 102,
    sentiment: 'HAPPY',
  },
  {
    sentimentId: (initialSentimentId++),
    projectId: 100,
    memberId: 102,
    sentiment: 'BAD',
  },
  {
    sentimentId: (initialSentimentId++),
    projectId: 100,
    memberId: 103,
    sentiment: 'OK',
  },
];


// Leave
let initialLeaveId = 100;
const leaves = [
  {
    leaveId: (initialLeaveId++),
    projectId: 100,
    memberId: 102,
    startDate: new Date('2023-04-02'),
    endDate: new Date('2023-04-04'),
    event: 'Going to hometown',
    userFullName: 'Bharath Raj',
    isRisk: false,
  },
  {
    leaveId: (initialLeaveId++),
    projectId: 100,
    memberId: 103,
    startDate: new Date('2023-04-08'),
    endDate: new Date('2023-04-14'),
    event: 'Marriage',
    userFullName: 'Abhishek Kharpal',
    isRisk: true,
  },
];


// Team Information
let initialTeamInformationId = 100;
const teamInformations = [
  {
    id: (initialTeamInformationId++),
    memberId: 100,
    bio: 'I am a full stack developer',
    projectRole: 'Po',
    projectId: 100,
    startDate: new Date('2023-03-28'),
    endDate: new Date('2023-04-28'),
  },
  {
    id: (initialTeamInformationId++),
    memberId: 101,
    bio: 'I am a full stack developer',
    projectRole: 'Leader',
    projectId: 100,
    startDate: new Date('2023-03-28'),
    endDate: new Date('2023-04-28'),
  },
  {
    id: (initialTeamInformationId++),
    memberId: 102,
    bio: `BE:
made to stick
project managment`,
    projectRole: 'Full Stack Developer',
    projectId: 100,
    startDate: new Date('2023-03-28'),
    endDate: new Date('2023-04-28'),
  },
  {
    id: (initialTeamInformationId++),
    memberId: 103,
    bio: `FE:
made to stick
po notes
dsm-team information
    `,
    projectRole: 'Full Stack Developer',
    projectId: 100,
    startDate: new Date('2023-03-28'),
    endDate: new Date('2023-04-28'),
  }
];

// Celebrations
let initialCelebrationId = 100;
const celebrations = [
  {
    celebrationId: (initialCelebrationId++),
    projectId: 100,
    memberId: 102,
    content: 'we are successfully able to spike the payment integration using stripe, thank you Abhishek for problem solving in the late evening yesterday',
    author: 'Bharath Raj',
    type: 'CELEBRATION',
    isAnonymous: false,
    isAbuse: false,
  },
  {
    celebrationId: (initialCelebrationId++),
    projectId: 100,
    memberId: 102,
    content: 'We should celebrate this',
    type: 'IMPEDIMENT',
    createdAt: new Date('2023-03-29'),
    isAbuse: false,
    isAnonymous: false,
    author: 'Bharath Raj'
  },
  {
    celebrationId: (initialCelebrationId++),
    projectId: 100,
    memberId: 103,
    content: 'We should get a cake for Abhishek\' Promotion.',
    type: 'IMPEDIMENT',
    isAbuse: false,
    isAnonymous: false,
    author: 'Abhishek Kharpal'
  },
  {
    celebrationId: (initialCelebrationId++),
    projectId: 100,
    memberId: 103,
    content: 'Congratulations @ritikrajdev761@gmail.com on your new role',
    type: 'CELEBRATION',
    isAbuse: false,
    isAnonymous: false,
    author: 'Abhishek Kharpal'
  }
];

// CelebrationReactedUser
let initialCelebrationReactedUserId = 100;
const celebrationReactedUsers = [
  {
    memberId: 102,
    celebrationId: 100,
    isRemoved: false,
    reactionId: (initialCelebrationReactedUserId++),
  },
  {
    memberId: 103,
    celebrationId: 100,
    isRemoved: false,
    reactionId: (initialCelebrationReactedUserId++),
  },
  {
    memberId: 102,
    celebrationId: 101,
    isRemoved: false,
    reactionId: (initialCelebrationReactedUserId++),
  },
  {
    memberId: 100,
    celebrationId: 102,
    isRemoved: false,
    reactionId: (initialCelebrationReactedUserId++),
  },
];

// Made to stick
let initialMadeToStickId = 100;
const stickys = madeToStickTemplate.map((item) => ({
  ...item,
  projectId: 100,
  memberId: 100,
  emailId: 'ritikrajdev761@gmail.com',
  i: String(initialMadeToStickId++),
}));


async function main() {
  console.log('Start seeding ...');
  for (const note of notes) {
    const noteData = await prisma.PONote.upsert({
      where: {
        noteId: note.noteId,
      },
      create: note,
      update: {},
    });
    console.log(`Created note with id: ${noteData.noteId}`);
  }

  for (const announcement of announcements) {
    const announcementData = await prisma.Announcement.upsert({
      where: {
        announcementId: announcement.announcementId,
      },
      create: announcement,
      update: {},
    });
    console.log(`Created announcement with id: ${announcementData.announcementId}`);
  }

  for (const request of requests) {
    const requestData = await prisma.Request.upsert({
      where: {
        requestId: request.requestId,
      },
      create: request,
      update: {},
    });
    console.log(`Created request with id: ${requestData.requestId}`);
  }

  for (const sentiment of sentiments) {
    const sentimentData = await prisma.SentimentMeter.upsert({
      where: {
        sentimentId: sentiment.sentimentId,
      },
      create: sentiment,
      update: {},
    });
    console.log(`Created sentiment with id: ${sentimentData.sentimentId}`);
  }

  for (const leave of leaves) {
    const leaveData = await prisma.Leave.upsert({
      where: {
        leaveId: leave.leaveId,
      },
      create: leave,
      update: {},
    });
    console.log(`Created leave with id: ${leaveData.leaveId}`);
  }

  for (const teamInformation of teamInformations) {
    const teamInformationData = await prisma.teamInformation.upsert({
      where: {
        id: teamInformation.id,
      },
      create: teamInformation,
      update: {},
    });
    console.log(`Created teamInformation with id: ${teamInformationData.id}`);
  }

  for (const celebration of celebrations) {
    const celebrationData = await prisma.Celebration.upsert({
      where: {
        celebrationId: celebration.celebrationId,
      },
      create: celebration,
      update: {},
    });
    console.log(`Created celebration with id: ${celebrationData.celebrationId}`);
  }

  for (const celebrationReactedUser of celebrationReactedUsers) {
    const celebrationReactedUserData = await prisma.CelebrationReactedUser.upsert({
      where: {
        reactionId: celebrationReactedUser.reactionId,
      },
      create: celebrationReactedUser,
      update: {},
    });
    console.log(`Created celebrationReactedUser with id: ${celebrationReactedUserData.reactionId}`);
  }

  for (const stick of stickys) {
    const stickData = await prisma.MadeToStick.upsert({
      where: {
        i: String(stick.i),
      },
      create: stick,
      update: {},
    });
    console.log(`Created stick with id: ${stickData.i}`);
  }

  console.log('Seeding finished.');
}

main();
