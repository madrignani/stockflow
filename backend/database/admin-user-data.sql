USE stockflow;

INSERT INTO users (cpf, name, email, role, password, created_at) VALUES
('01234567890', 'Administrador', 'administrador@stockflow.com', 'admin', '\$2y\$12\$BK8hVVdJ37sSQpl2FcLbZu1kZlGBqXgor3G4UzvDMcPS0sa4NOt2y', NOW());