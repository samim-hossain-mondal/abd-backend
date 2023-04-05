const { managementPrisma: prisma } = require('../../src/prismaClient.js');

const members = [
  {
    memberId: 100,
    email: 'ritikrajdev761@gmail.com',
    name: 'Ritik Rajdev',
    slackLink: 'https://slack.com',
  },

  {
    memberId: 101,
    email: 'samimka05@gmail.com',
    name: 'Samim Mondal',
    slackLink: 'https://slack.com',
  },
  {
    memberId: 102,
    email: 'bharathrajgngowdara@gmail.com',
    name: 'Bharath Raj',
    slackLink: 'https://slack.com',
  },
  {
    memberId: 103,
    email: 'abhikharpal@gmail.com',
    name: 'Abhishek Kharpal',
    slackLink: 'https://slack.com',
  },
];

const projects = [
  {
    projectId: 100,
    projectName: 'My Agile Board',
    projectDescription: `In the software industry, there is often a lack of transparency, collaboration, and effective communication, which can lead to missed deadlines, poor decision-making, and a negative impact on team morale. Additionally, teams often struggle with risk and planning, which can result in inefficient use of time and resources.
The objective of this app is to enhance :-
Transparency
Collaboration
Communication
It aims to provide a centralized platform where team members can easily access important information, collaborate effectively, and manage risk and planning efficiently.
`,
  },
];

const projectMembers = [
  {
    projectId: 100,
    memberId: 100,
    email: 'ritikrajdev761@gmail.com',
    role: 'ADMIN',
  },
  {
    projectId: 100,
    memberId: 101,
    email: 'samimka05@gmail.com',
    role: 'LEADER',
  },
  {
    projectId: 100,
    memberId: 102,
    email: 'bharathrajgngowdara@gmail.com',
    role: 'MEMBER',
  },
  {
    projectId: 100,
    memberId: 103,
    email: 'abhikharpal@gmail.com',
    role: 'MEMBER',
  },
];

// bulk create prisma members
async function main() {
  console.log('Start seeding ...');
  for (const member of members) {
    const memberData = await prisma.Member.upsert({
      where: {
        email: member.email,
      },
      create: member,
      update: {},
    });
    console.log(`Created member with id: ${memberData.memberId}`);
  }
  for (const project of projects) {
    const projectData = await prisma.Project.upsert({
      where: {
        projectId: project.projectId,
      },
      create: project,
      update: {},
    });
    console.log(`Created project with id: ${projectData.projectId}`);
  }
  for (const projectMember of projectMembers) {
    try {
      const projectMemberData = await prisma.ProjectMember.upsert({
        where: {
          projectId_email: {
            projectId: projectMember.projectId,
            email: projectMember.email,
          },
        },
        create: projectMember,
        update: {},
      });
      console.log(
        `Added member ${projectMember.memberId} in project ${projectMemberData.projectId}`
      );
    } catch (error) {
      console.log('Error: ', projectMember);
    }
    
    
  }
  console.log('Seeding finished.');
}

main();
