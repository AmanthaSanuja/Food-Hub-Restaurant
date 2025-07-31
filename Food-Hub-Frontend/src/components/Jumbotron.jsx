
function Jumbotron() {
  return (
    <div className="bg-light p-5 rounded-3 text-center">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col md="auto">
            <div
              style={{
                backgroundColor: '#6f42c1',
                width: '60px',
                height: '60px',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto'
              }}
            >
              <span className="text-white fs-3 fw-bold">B</span>
            </div>
          </Col>
        </Row>
        <h1 className="fw-bold">Jumbotron with icon</h1>
        <p className="lead text-muted">
          This is a custom jumbotron featuring an SVG image at the top,
          some longer text that wraps early thanks to a responsive
          <code className="text-danger"> .col-* </code> class, and a customized call to action.
        </p>
        <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
          <Button variant="primary" size="lg">
            Call to action &rarr;
          </Button>
          <Button variant="outline-secondary" size="lg">
            Secondary link
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Jumbotron;
