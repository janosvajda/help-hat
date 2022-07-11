import { Test, TestingModule } from '@nestjs/testing';
import { VirtaulHatController } from './virtaul_hat.controller';
import { VirtualHatService } from './virtual_hat.service';

describe('VirtaulHatController', () => {
  let virtualHatController: VirtaulHatController;
  const mockVirtualHatEntity = { id: 1, value: 10, userId: 1 };
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VirtaulHatController],
      providers: [
        {
          provide: VirtualHatService,
          useValue: {
            get: jest.fn(() => mockVirtualHatEntity)
          }
        }
      ]
    }).compile();

    virtualHatController = app.get<VirtaulHatController>(VirtaulHatController);
  });

  describe('virtualHatController', () => {
    it('should be defined', () => {
      expect(virtualHatController).toBeDefined();
    });
  });
});
