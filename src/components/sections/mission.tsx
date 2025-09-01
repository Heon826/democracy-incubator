import Image from 'next/image';

const MissionSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-2 md:col-start-2">
            <h2 className="font-display text-[48px] font-bold uppercase text-text-dark">
              Our Mission
            </h2>
            <div className="mt-4 h-px w-full bg-border" />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 items-center gap-12 md:gap-8">
          <div className="md:col-span-2 lg:col-span-1 lg:col-start-2">
            <p className="font-body text-base italic leading-relaxed text-primary">
              Asia-Pacific Democracy Incubator serves to foster a collaborative
              environment to educate and develop values of democracy for future
              leaders. We aim to strengthen the relationships of democratic
              nations in the Asia-Pacific region—Japan, Korea, and the United
              States—by exchanging thoughts and sharing practices that can lead to
              legislative solutions.
            </p>
          </div>
          <div className="flex justify-center md:col-auto md:justify-self-end">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0a81aefa-006b-45bc-86ef-4ca6a005b03e-democracyincubator-org/assets/images/mission-image-2.png?"
              alt="mission image"
              width={390}
              height={390}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;