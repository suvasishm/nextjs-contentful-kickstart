function Brand({ fields }) {
  return (
      <div className="container">
        <div className="text">
          <a href={fields.website}>
            <img alt={fields.companyName} src={fields.logo.fields.file.url} />
          </a>
          <p>{fields.companyDescription}</p>
        </div>
        <style jsx>{`
        .container {
          cursor: pointer;
          height: 453px;
          margin-bottom: 48px;
        }
        a {
          border-bottom: none;
        }
        a:hover {
          border-bottom: none;
        }
        .text {
          margin-top: -160px;
          padding: 24px;
          position: absolute;
        }
        h2 {
          color: white;
          font-size: 24px;
          margin-bottom: 0;
        }
        h4 {
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          font-weight: 500;
          margin-top: 8px;
        }
      `}</style>
      </div>
  )
}

export default Brand