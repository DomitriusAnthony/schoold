class ChallengesController < ApplicationController
<<<<<<< HEAD
	before_action :set_challenge, only: [:update_heading, :update_paragraph, :update_image_one, :update_image_two, :update_image_three, :update_video_tag]

=======
	def profile_picture
	 HEAD
		@challenge = Challenge.new(challenge_params)
		@user = User.find(current_user)
	 end
>>>>>>> 5bd73c2f0e536a72273079d09841f4e2f46b8e1c


	def update_profile
		@challenge = Challenge.create(profile_pic: "")
		@challenge = challenge.update(profile_pic: params[:profile_pic])

	 	 if @challenge.save
	 	 	format.html { redirect_to "/challenge_two" }
	 	 end
	 end

	 def update_heading
	 	@challenge = challenge.update(heading_tag: params[:heading_tag])
	 end

	 def update_paragraph 
	 	@challenge = challenge.update(p_tag: params[:p_tag])
	 end


	 def update_image_one 
	 	@challenge = challenge.update(image_one: params[:image_one])
	 end


	 def update_image_two 
	 	@challenge = challenge.update(image_two: params[:image_two])
	 end


	 def update_image_three
	 	@challenge = challenge.update(image_three: params[:image_three])
	 end


	 def update_video_tag 
	 	@challenge = challenge.update(video_tag: params[:video_tag])
	 end

<<<<<<< HEAD


	private

	def set_challenge
		@challenge = Challenge.find(1)
	end 
=======
	 private 
>>>>>>> 5bd73c2f0e536a72273079d09841f4e2f46b8e1c
	 
	 def challenge_params
	 	params.require(:challenge).permit(:profile_pic, :heading_tag, :p_tag, :image_one, :image_two, :image_three, :video_tag)
	 end
<<<<<<< HEAD
end
=======
>>>>>>> 5bd73c2f0e536a72273079d09841f4e2f46b8e1c
