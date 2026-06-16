import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetailsPage(props) {
  return (
    <MeetupDetail
      image="https://static.vecteezy.com/system/resources/previews/057/068/323/non_2x/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
      title="first meetup"
      address="mumbai"
      description="the first description"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetup: {
        image:
          "https://static.vecteezy.com/system/resources/previews/057/068/323/non_2x/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg",
        id: meetupId,
        title: "first meetup",
        address: "mumbai",
        description: "the first description",
      },
    },
  };
}

export default MeetupDetailsPage;
