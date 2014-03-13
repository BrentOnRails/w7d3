json.(feed, :id, :title, :url, :created_at, :updated_at)

entries ||= nil

unless entries.nil?
  json.entries(entries) do |entry|
    json.(entry, :title, :link, :published_at, :guid, :id, :created_at)
  end
end
