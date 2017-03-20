class ChallengesController < ApplicationController
	def profile_picture
		@challenge = Challenge.new(challenge_params)
		@user = User.find(current_user)
	 end

	 def update_profile
	 	@challenge = challenge.update(profile_pic: params[:profile_pic])

	 	 if @challenge.update
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

	 private 
	 
	 def challenge_params
	 	params.require(:challenge).permit(:profile_pic, :heading_tag, :p_tag, :image_one, :image_two, :image_three, :video_tag)
	 end
end
