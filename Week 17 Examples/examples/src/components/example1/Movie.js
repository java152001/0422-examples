// Old
// class Movie extends HTMLElement {
//     constructor() {
//       super();
//     }
  
//     connectedCallback() {
//       const title = this.getAttribute('title');
//       const showTime = this.getAttribute('showTime');
//       const screen = this.getAttribute('screen');
//       const row = this.getAttribute('row');
//       const seat = this.getAttribute('seat');
//       const imageUrl = this.getAttribute('imageUrl');
  
//       this.innerHTML = `
//           <div class="movie-card">
//               <div class="movie-header" style="background: url(${imageUrl}); background-size: cover;">
//                   <div class="header-icon-container">
//                       <a href="#">
//                           <i class="material-icons header-icon"></i>
//                       </a>
//                   </div>
//               </div>
//               <div class="movie-content">
//                   <div class="movie-content-header">
//                       <a href="#">
//                           <h3 class="movie-title">${title}</h3>
//                       </a>
//                       <div class="imax-logo"></div>
//                   </div>
//                   <div class="movie-info">
//                       <div class="info-section">
//                           <label>Date & Time</label>
//                           <span>${showTime}</span>
//                       </div>
//                       <div class="info-section">
//                           <label>Screen</label>
//                           <span>${screen}</span>
//                       </div>
//                       <div class="info-section">
//                           <label>Row</label>
//                           <span>${row}</span>
//                       </div>
//                       <div class="info-section">
//                           <label>Seat</label>
//                           <span>${seat}</span>
//                       </div>
//                   </div>
//               </div>
//           </div>
//       `;
//     }
//   }

function Movie({ data }) {
    const movieStyle = {
      background: 'url(' + data.imageUrl + ')',
      backgroundSize: 'cover'
    }
  
    return (
      <div className="movie-card">
              <div className="movie-header" style={movieStyle}>
                  <div className="header-icon-container">
                      <a href="#">
                          <i className="material-icons header-icon"></i>
                      </a>
                  </div>
              </div>
              <div className="movie-content">
                  <div className="movie-content-header">
                      <a href="#">
                          <h3 className="movie-title">${data.title}</h3>
                      </a>
                      <div className="imax-logo"></div>
                  </div>
                  <div className="movie-info">
                      <div className="info-section">
                          <label>Date & Time</label>
                          <span>${data.showTime}</span>
                      </div>
                      <div className="info-section">
                          <label>Screen</label>
                          <span>${data.screen}</span>
                      </div>
                      <div className="info-section">
                          <label>Row</label>
                          <span>${data.row}</span>
                      </div>
                      <div className="info-section">
                          <label>Seat</label>
                          <span>${data.seat}</span>
                      </div>
                  </div>
              </div>
          </div>
    )
  }

export default Movie
  