import '@testing-library/jest-dom'
import { config } from '@vue/test-utils'

config.stubs['client-only'] = { template: '<div/>' }
