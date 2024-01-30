import React, { Component } from "react";

// auto-updated each 60 seconds

export class NewsItem extends Component {
  render() {
    let { title, description, url, newsurl, author, publishedAt, source } =
      this.props;

    // Default placeholder image URL
    const placeholderImageUrl =
      "https://www.livemint.com/lm-img/img/2024/01/02/1600x900/EconomyPixabay_1685608674909_1704185742910.jpg";

    return (
      <div className="container my-3">
        <div className="card">
          <img
            src={url ? url : placeholderImageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text" style={{ marginBottom: "0.5em" }}>
              {description}...
            </p>
            <span class="badge bg-secondary ">{source}</span>
            {author ? (
              <h6 className="author my-2">By {author}</h6>
            ) : (
              <h6 className="author">Unknown</h6>
            )}
            <p class="published">
              <small class="text-muted">
                {new Date(publishedAt).toGMTString()}
              </small>
            </p>

            <a
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-primary"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
