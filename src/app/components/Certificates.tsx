import React from 'react';
import '../styles/Experience.css';
export default function Certificate() {
  return (
    <>
<h1 style={{ paddingLeft: '7%', color: 'white' }} className="Certificate" id="Certificate">Certificates</h1>
<hr style={{ marginLeft: '7%', width: '86%', color: 'white' }} />
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 g-7">
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Google cloud platform Data Engineer path</h5>

              <a href="#" className="card-link">Certificate link</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Google cloud platform Data Analyst path</h5>
              <a href="#" className="card-link">Certificate link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
