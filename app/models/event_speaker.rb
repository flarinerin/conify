# == Schema Information
#
# Table name: event_speakers
#
#  event_id   :integer
#  speaker_id :integer
#
# Indexes
#
#  index_event_speakers_on_event_id    (event_id)
#  index_event_speakers_on_speaker_id  (speaker_id)
#



class EventSpeaker < ActiveRecord::Base
  belongs_to :event, inverse_of: :event_speaker
  belongs_to :speaker, inverse_of: :event_speaker
end
